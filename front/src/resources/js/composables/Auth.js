import axios from "axios"
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAuth(){
    const router = useRouter();
    let isLogin = ref(false)

    const storeUser = async (data) => {
        try{
            const resp = await axios.post('http://localhost:8000/api/auth/login', data, {withCredentials:true})
            window.$cookies.set('Bearer', resp.data)
            await router.push({ name: 'home' })
        }catch(e){
            console.log(e);
        }
    }

    const createUser = async (data) => {
        try{
            const resp = await axios.post('http://localhost:8000/api/auth/register', data, {withCredentials: true})
            await router.push({ name: 'login' })
        }catch(e){
            console.log(e);
        }
    }

    const getUserToken = async () => {
        try{
            let token = window.$cookies.get('Bearer');
            const resp = await axios.get('http://localhost:8000/api/user', {headers: {Authorization: `Bearer ${token}`}})
            isLogin.value = true
        }catch(e){
            console.log(e);
        }
    }

    return {
        isLogin,
        storeUser,
        createUser,
        getUserToken
    }
}