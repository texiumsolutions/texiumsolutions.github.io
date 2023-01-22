import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className="flex bg-blue-800 justify-between">
      <div className="flex p-5 font-semibold">
        <Link to="/dashmenu" className=" text-white mx-4 text-2xl">
          <AiOutlineMenu></AiOutlineMenu>
        </Link>
        <Link to="/dashhome" className=" text-white mx-4 text-2xl">
          <FaHome></FaHome>
        </Link>
        <Link to="/internalDb" className=" text-white mx-4 text-xl">
          Internal DB
        </Link>
        <Link to="/career" className=" text-white mx-4 text-xl">
          Career Builder
        </Link>
        <Link to="/monster" className=" text-white mx-4 text-xl">
          Monster
        </Link>
        <Link to="/dice" className=" text-white mx-4 text-xl">
          Dice
        </Link>
        <Link to="/ints" className=" text-white mx-4 text-xl">
          Integrated Search
        </Link>
      </div>
      <div class="avatar p-4">
        <div class="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img alt=" " src="https://placeimg.com/192/192/people" />
        </div>
        <p className="text-white p-2 font-bold mx-2">Sumaya</p>
      </div>
    </div>
  );
};

export default DashboardNavbar;
