
import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const[orders,setOrders]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/order',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(response=>response.json())
        .then(data=>setOrders(data))
    },[])
    console.log(orders) 
    return (
        <div>
        <h1>Total Order is:{orders?.length}</h1>
        <div class="overflow-x-auto">
<table class="table w-full">
{/* <!-- head --> */}
<thead>
  <tr>
    <th></th>
    <th>Email</th>
    <th>Name</th>
    <th>Quantity</th>
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
            <td>{order.quantity}</td>
            <td><button  o class="btn btn-xs btn-success">Shipped</button></td>
            <td><button class="btn btn-xs btn-error">Delete</button></td>
          </tr> )
       
    }
   
 
  
</tbody>
</table>
</div>
    </div>
    );
};

export default ManageOrders;