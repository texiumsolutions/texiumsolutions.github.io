import React from 'react';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "../App.css";

const Home = () => {
    return (
        <div className='flex h-96 justify-center items-center'>
         <h1 className='text-4xl text-info font-bold'>Welcome to Texium Data Platform! <br /> <Link to='/login' className='text-2xl text-blue-800 flex justify-center items-center lg:py-6'>Login Here <span className='mx-3 my-1'><BsFillArrowRightSquareFill></BsFillArrowRightSquareFill></span></Link></h1> 
         
        </div>
    );
};

export default Home;