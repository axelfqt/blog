import axios from "axios"

export default function useAuth(){
    const storeUser = async (data) => {
        try{
            const resp = await axios.post('http://localhost:8000/api/auth/login', data, {withCredentials:true})
            window.$cookies.set('Bearer', resp.data)
        }catch(e){
            console.log(e);
        }
    }

    return {
        storeUser
    }
}