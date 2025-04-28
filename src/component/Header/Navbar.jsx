import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link>Home</Link></li>
                        <li><Link to={'/myBooking'}>My-Bookings</Link></li>
                        <li><Link>Blogs</Link></li>
                        <li><Link>Contact Us</Link></li>
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
                    <li className='text-lg'><Link>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#0EA106] text-white rounded-full ">Contact Now</a>
            </div>
        </div>
    );
};

export default Navbar;