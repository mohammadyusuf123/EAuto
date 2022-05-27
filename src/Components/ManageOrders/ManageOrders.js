
import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const[orders,setOrders]=useState([])
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
        fetch('http://localhost:2000/order',{
            method:'GET',
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
            <td><button  class="btn btn-xs btn-success">Shipped</button></td>
            <td><button   onClick={()=>handleDelete(order._id)} class="btn btn-xs btn-error">Delete</button></td>
          </tr> )
       
    }
   
 
  
</tbody>
</table>
</div>
    </div>
    );
};

export default ManageOrders;