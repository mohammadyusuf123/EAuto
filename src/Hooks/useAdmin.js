import { useEffect, useState } from "react"

const useAdmin=user=>{
    const[admin,setAdmin]=useState(false)
    const[loadingAdmin,setLoadingAdmin]=useState(true)
    const email=user?.email
    if(email){
        fetch(`http://localhost:2000/admin/${email}`,{
            method:'GET',
           headers:{
               'content-type':'application/json',
               authorization:`Bearer ${localStorage.getItem('accessToken')}`
             },
            
         })
        .then(response=>response.json())
         .then(data=>{
           
            setAdmin(data.admin)
            setLoadingAdmin(false)
        })
    }
    useEffect(()=>{

    },[user])
 return[admin,loadingAdmin]
}
export default useAdmin;