import React from 'react';
import Navbar from '../../component/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-340px)] max-w-[1440px] mx-auto'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;