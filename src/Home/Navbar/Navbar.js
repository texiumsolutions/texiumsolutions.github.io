import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';

const Navbar = () => {
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
        <div className='flex justify-between bg-blue-800 font-semibold'>

            <div className='pl-16 pt-4'>
                <Link to="/" className='btn bg-white text-black'>Home</Link>
                {/* <Link to="/dashboard" className='btn mx-20 bg-white text-black'>Dashboard</Link> */}
            </div>
 
         {signInErrorMessage}

            
                <div className='my-4 mx-8'>
                    {user ? <Link className='btn bg-white text-black' to="/signup" onClick={logout}>Signup</Link> : <Link className='btn bg-white text-black' to="/login">Login</Link>}
                </div>
           
        </div>
    );
};

export default Navbar;