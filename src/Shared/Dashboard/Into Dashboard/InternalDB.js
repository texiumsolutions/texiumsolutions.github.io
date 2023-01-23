import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardNavbar from '../DashboardNavbar';
import "../Dashboard.css";

const InternalDB = () => {
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>
       <ul class="menu menu-horizontal bg-gray-100 w-screen px-10 my-4 py-4">
          <li><NavLink className="search-hover" to="/src">Search Options</NavLink></li>
          <li><NavLink className="search-hover" to="/exc">Exclude</NavLink></li>
       </ul>
    </div>
  );
};

export default InternalDB;