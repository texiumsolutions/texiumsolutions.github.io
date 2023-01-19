import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
            signOut(auth);
    };
    return (
        <div className='flex justify-between font-semibold'>
            <div className='pl-16 pt-4'>
                <Link to="/">Home</Link>
            </div>
            
                <div className='my-4 mx-8'>
                    {user ? <Link className='btn btn-info' to="/signup" onClick={logout}>Signup</Link> : <Link className='btn btn-info' to="/login">Login</Link>}
                </div>
           
        </div>
    );
};

export default Navbar;