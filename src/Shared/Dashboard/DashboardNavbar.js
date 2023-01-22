import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiFillFileAdd, AiFillSetting } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading";
import './DashboardNavbar.css';

const DashboardNavbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  let signInErrorMessage;
  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    signInErrorMessage = <p className="text-red-500"><small>{error?.message}</small></p>
  }
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
            </ul>
          </div>
        </div>

        <NavLink to="/internalDb" exact activeClassName="active" className="text-white mx-4 text-xl ml-10 nav-link">
          Internal DB
        </NavLink>
        <NavLink to="/career" exact activeClassName="active" className="text-white mx-4 text-xl nav-link">
          Career Builder
        </NavLink>
        <NavLink to="/monster" exact activeClassName="active" className="text-white mx-4 text-xl nav-link">
          Monster
        </NavLink>
        <NavLink to="/dice" exact activeClassName="active" className=" text-white mx-4 text-xl nav-link">
          Dice
        </NavLink>
        <NavLink to="/ints" exact activeClassName="active" className=" text-white mx-4 text-xl nav-link">
          Integrated Search
        </NavLink>
      </div>
      {signInErrorMessage}
      <div className="flex">
        <p className="text-white font-semibold py-5">Sumaya</p>
        <div class="avatar py-4 mx-4">
          <div class="w-10 h-10  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt=" " src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className='pt-5 mx-4'>
          {user ? <Link className='text-white font-semibold' to="/" onClick={logout}>SignOut</Link> : <Link className='text-white font-semibold' to="/">Login</Link>}
        </div>

      </div>
    </div>
  );
};

export default DashboardNavbar;
