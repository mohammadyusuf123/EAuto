import { useEffect, useState } from "react"

const useMail=user=>{
    const[mail,setMail]=useState('')
    useEffect(()=>{
        console.log('info',user)
        const email=user?.user?.email
     const currentUser={email:email}

    if(email){
         fetch(`http://localhost:2000/user/${email}`,{
            method:'PUT',
           headers:{
               'content-type':'application/json'
             },
            body:JSON.stringify(currentUser)
         })
        .then(response=>response.json())
         .then(data=>{
            console.log('data',data)
        })
    
    }
    },[user])
    return[mail]
}
export default useMail;