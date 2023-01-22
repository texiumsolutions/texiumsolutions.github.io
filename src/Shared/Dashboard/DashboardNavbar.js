import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiFillFileAdd, AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

const DashboardNavbar = () => {
  return (
    <div className="flex bg-blue-800 justify-between">
      <div className="flex pt-5 font-semibold">

        <div class="dropdown">
          <label tabindex="0" className="">
            <div className="pt-1 pl-4">
              <Link to="/dashmenu" className="text-white text-2xl">
                <AiOutlineMenu></AiOutlineMenu>
              </Link>
            </div>
          </label>
          <div className="flex justify-start items-start pt-5">
            <ul tabindex="0" className="menu menu-compact dropdown-content shadow bg-blue-800 h-[645px] w-16">
              <Link to="/dashhome" className=" text-white mx-4 pt-8 pb-4 text-2xl">
                <FaHome></FaHome>
              </Link>
              <Link to="/dashhome" className=" text-white mx-4 pt-4 pb-4 text-2xl">
                <AiFillFileAdd></AiFillFileAdd>
              </Link>
              <Link to="/dashhome" className=" text-white mx-4 pt-4 pb-4 text-2xl">
                <AiFillSetting></AiFillSetting>
              </Link>
              <div class="avatar pl-2 pt-[400px]">
                <div class="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img alt=" " src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </ul>
          </div>
        </div>
        <Link to="/dashhome" className=" text-white mx-4 pl-4 text-2xl">
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
    </div>
  );
};

export default DashboardNavbar;
