import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const AllOrders = () => {
    const [user]=useAuthState(auth)
    const[orders,setOrders]=useState([])
    const nevigate=useNavigate()
    const handlePayment=(id)=>{
        nevigate(`/payment/${id}`)
    }
    
    const handleDelete=id=>{
      const proceed=window.confirm("Are you sure want to delete")
      if(proceed){
       const url=`http://localhost:2000/order/${id}`
       fetch(url,{
           method:'DELETE'     
       })
       .then(response=>response.json())
       .then(data=>{
           console.log(data)
       })
       const find=orders.filter(service=>service._id!==id)
       setOrders(find)
      }
  }






    useEffect(()=>{
        const getAllOrders=async()=>{
            const email=user?.email
            const url=`http://localhost:2000/order/${email}`;
           try{
            const{data}= await axios.get(url,{
                headers:{
                    authorization:`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setOrders(data)
           }
           catch(error){
             console.log(error.message)
             if(error.response.status===401||error.response.status===403){
               signOut(auth)
              nevigate('/login')
             }
           }
                   }
                   getAllOrders();
    },[])
    return (
        <div>
            <h1 className='text-xl'>Total order is:{orders.length}</h1>
            <div class="overflow-x-auto">
<table class="table w-full">
{/* <!-- head --> */}
<thead>
  <tr>
    <th></th>
    <th>Email</th>
    <th>Name</th>
    <th>Status</th>
    <th>Status</th>
  </tr>
</thead>
<tbody>
    {
        orders?.map(order=><tr>
            <th></th>
            <td>{order.email}</td>
            <td>{order.parts}</td>
            <td><button  onClick={()=>handlePayment(order.productId
)} class="btn btn-xs btn-success">Make Payment</button></td>
            <td><button  onClick={()=>handleDelete(order._id)} class="btn btn-xs btn-error">Delete</button></td>
          </tr> )
       
    }
   
 
  
</tbody>
</table>
</div>
        </div>
    );
};

export default AllOrders;