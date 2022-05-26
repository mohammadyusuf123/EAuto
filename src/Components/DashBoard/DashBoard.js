import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content font-bold">
          <h1 className='text-2xl text-center text-purple-400'> Welcome To Your Dashboard</h1>
          <Outlet></Outlet>
         
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li><Link to='/dashboard'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Review</Link></li>
            <li><Link to='/dashboard/alluser'>All User</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;