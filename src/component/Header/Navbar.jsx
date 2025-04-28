import React from 'react';
import { Link, Links } from 'react-router';

const Navbar = () => {
    return (
        <div className=" bg-base-100 border-b-1 border-gray-300 mb-10">
            <div className='w-[1440px] mx-auto navbar px-2 py-5 '>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <img className='w-10' src="../../../src/assets/logo.png" alt="no jpg" />
                    <a className="btn btn-ghost text-xl">Law.BD</a>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link>Home</Link></li>
                        <li><Link to={'/myBooking'}>My-Bookings</Link></li>
                        <li><Link Link to={'/blogs'}>Blogs</Link></li>
                        <li><Link to={'/contact'} >Contact Us</Link></li>
                    </ul>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='w-10' src="../../../src/assets/logo.png" alt="no jpg" />
                    <a className="btn btn-ghost text-xl">Law.BD</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='text-lg'><Link to='/'>Home</Link></li>
                    <li className='text-lg'><Link to={'/myBooking'} >My-Bookings</Link></li>
                    <li className='text-lg'><Link to={'/blogs'}>Blogs</Link></li>
                    <li className='text-lg'><Link to={'/contact'}>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/contact'} ><a className="btn bg-[#0EA106] text-white rounded-full ">Contact Now</a></Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;