import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useUsers(){
    const strSearch = ref('');
    const users = ref([]);
    const user = ref([]);
    const router = useRouter();

    
    const findUsers = async (data) => {
        // await router.push({ name: 'users', params: {name: data.value} })
        console.log(data);
        const resp = await axios.get(`http://localhost:8000/api/users/${data}`);
        users.value = resp.data.data
    }

    const getUser = async (data) => {
        const resp = await axios.get(`http://localhost:8000/api/user/${data}`)
        console.log(data);
        console.log(resp);
        user.value = resp.data.data
    }

    return {
        strSearch,
        users,
        user,
        findUsers,
        getUser
    }
}