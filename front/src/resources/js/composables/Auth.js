import axios from "axios"
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useAuth(){
    const router = useRouter();
    let isLogin = ref(false)
    let token = ref();

    const redirectTo = async (path) => {
        await router.push({ name: path })
        router.go();
    }

    const storeUser = async (data) => {
        try{
            const resp = await axios.post('http://localhost:8000/api/auth/login', data, {withCredentials:true})
            window.$cookies.set('Bearer', resp.data)
            redirectTo('home')
        }catch(e){
            console.log(e);
        }
    }

    const createUser = async (data) => {
        try{
            const resp = await axios.post('http://localhost:8000/api/auth/register', data, {withCredentials: true})
            redirectTo('login')
        }catch(e){
            console.log(e);
        }
    }

    const getUserToken = async () => {
        try{
            token = window.$cookies.get('Bearer');
            if(token){
                const resp = await axios.get('http://localhost:8000/api/user', {headers: {Authorization: `Bearer ${token}`}})
                isLogin.value = true
            }
        }catch(e){
            return;
        }
    }

    const logout = async () => {
        await axios.get('http://localhost:8000/api/logout', {headers: {Authorization: `Bearer ${token}`}})
        window.$cookies.remove('Bearer')
        redirectTo('home')
    }

    return {
        isLogin,
        storeUser,
        createUser,
        getUserToken,
        logout
    }
}