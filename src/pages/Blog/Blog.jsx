import React from 'react';
import { SlCalender } from "react-icons/sl";

const Blog = ({blog}) => {
    return (
        <div>
            <div className='bg-[#0F0F0F0D] rounded-3xl p-5 mt-10'>
          <h2 className='text-3xl font-bold mt-5 mb-2 px-4 '>{blog.question}</h2>
          <hr className='border-1 text-gray-300 mt-3 '></hr>
          <p className=' py-3 px-4 text-lg '>{blog.answer} </p>
          <hr className='border-1 text-gray-300 mt-3 '></hr>
          <div className='flex items-center justify-between gap-2 mt-4 p-4'>
          <div className='flex items-center gap-3'>
          <SlCalender />
            <p className='font-semibold'>Published By: {blog.name}</p>
          </div>
          <p className='mr-5 font-semibold'>Added: {blog.publishDate}</p>
          </div>
          </div>
        </div>
    );
};

export default Blog;