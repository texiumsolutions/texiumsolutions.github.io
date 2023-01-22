import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Loading";

const DashboardNavbar = () => {
  const [user, loading, error] = useAuthState(auth);
    const logout = () => {
            signOut(auth);
    };
    let signInErrorMessage;
    if(loading){
        return <Loading></Loading>
      }
      if(error){
        signInErrorMessage = <p className="text-red-500"><small>{error?.message}</small></p>
      }
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
      {signInErrorMessage}
      <div className="flex">
      <p className="text-white font-bold py-6">Sumaya</p>
      <div class="avatar py-4 mx-4">
        <div class="w-12 h-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img alt=" " src="https://placeimg.com/192/192/people" />
        </div>
        </div>
        <div className=' py-4 mx-4'>
                    {user ? <Link className='btn text-white' to="/" onClick={logout}>SignOut</Link> : <Link className='btn  text-white' to="/">Login</Link>}
         </div>
      
      </div>
    </div>
  );
};

export default DashboardNavbar;
