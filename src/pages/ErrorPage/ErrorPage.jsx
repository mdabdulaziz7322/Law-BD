import React from 'react';
import Navbar from '../../component/Header/Navbar';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBackToHome = () => {
        navigate('/');
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Navbar></Navbar>
            <div className='flex flex-col items-center justify-center mx-auto mt-40' >
            <img className='w-[200px]' src="../../../src/assets/computer.png" alt="" />
            <h1 className='text-5xl text-center font-bold mt-5'>404</h1>
            <h3 className='text-3xl text-center font-bold'>Page Not Found</h3>
            <p className='text-center text-xl font-semibold'>The page you are looking for might have been removed or is temporarily unavailable.</p>
            <p className='text-center text-xl font-semibold'>Please go back to the previous page or return to the homepage.</p>
            <button onClick={handleBackToHome} className="btn btn-active btn-error mt-10 px-10 text-white">Back To Home</button>

            </div>
        </div>
    );
};

export default ErrorPage;