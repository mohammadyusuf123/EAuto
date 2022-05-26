import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = ({user}) => {
    const{email,role}=user
    const makeAdmin=()=>{
        fetch(`http://localhost:2000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(response=>{
            if(response.status===403){
                toast.error('Opps! Sorry')
            }
            return response.json()}
        )
        .then(data=>{if(data.modifiedCount>0){
            toast.success('Make Admin Successfully')
        }
        })
    }
    return (
    
          <tr>
                <th></th>
                <td>{email}</td>
                <td>{role!=='admin'&&<button  onClick={makeAdmin} class="btn btn-xs btn-success">Make Admin</button>}</td>
                <td><button class="btn btn-xs btn-error">Delete</button></td>
              </tr>
        
    );
};

export default Admin;