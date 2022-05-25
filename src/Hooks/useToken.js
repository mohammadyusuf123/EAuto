import { useEffect, useState } from "react"
import axios from 'axios';

const useToken=user=>{
    const [token,setToken]=useState('')
    useEffect(()=>{
const getToken=async()=>{
    const email=user?.user.email
    console.log(email)
    if(email){
        const{data}=await axios.post('http://localhost:2000/login',{email});
    setToken(data)
    localStorage.setItem('accessToken',data)
    }
}
 getToken()
    },[user])
    return[token]

}
export default useToken