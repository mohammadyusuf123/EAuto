import React, { useEffect, useState } from 'react';
import Admin from '../Admin/Admin';
const AllUser = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/user',{
            method:'GET',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(response=>response.json())
        .then(data=>setUsers(data))
    },[])
    return (
        <div>
            <h1>Total User is:{users?.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
        {
            users?.map(user=><Admin key={user._id} user={user}></Admin> )
        }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;