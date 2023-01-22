import React from 'react';
import { Link } from 'react-router-dom';
import DashboardNavbar from '../DashboardNavbar';

const InternalDB = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
       <ul class="menu menu-horizontal bg-gray-100 w-screen px-10 my-4 py-4 rounded-box">
          <li><Link to="/src">Search Options</Link></li>
          <li><Link to="/exc">Exclude</Link></li>
       </ul>
    </div>
  );
};

export default InternalDB;