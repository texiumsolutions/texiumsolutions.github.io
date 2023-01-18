import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between font-semibold'>
            <div className='pl-16 pt-4'>
                <Link to="/">Home</Link>
            </div>
            <div className='pr-16 pt-4 flex'>
                <div>
                    <Link to="login">Login</Link>
                </div>
                <div className='pl-4'>
                    <Link to="signup">Signup</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;