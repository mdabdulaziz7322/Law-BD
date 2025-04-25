import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <div >
            <h2 className='text-3xl font-bold text-center mt-5 mb-2'>We Provide Best Law Services</h2>
            <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mb-10 ml-1'>
            <div className='bg-[#0F0F0F0D] stroke-1 stroke-[1px Inside #0F0F0F26]  h-[257px] rounded-2xl'>
                <img className='w-20 ml-7 mt-10 mb-3' src="../../../src/assets/success-doctor.png" alt="" />
                <h1 className='text-4xl font-bold ml-7'><CountUp end={199} duration ={10} />+</h1>
                <p className='ml-7 mt-2'>Total Lawyer</p>
            </div>
            <div className='bg-[#0F0F0F0D] stroke-1 stroke-[1px Inside #0F0F0F26] rounded-2xl'>
                <img className='w-20 ml-7 mt-10 mb-3' src="../../../src/assets/success-review.png" alt="" />
                <h1 className='text-4xl font-bold ml-7'></h1>
                <h1 className='text-4xl font-bold ml-7'><CountUp end={467} duration ={10} />+</h1>
                <p className='ml-7 mt-2'>Total Reviews</p>
            </div>
            <div className='bg-[#0F0F0F0D] stroke-1 stroke-[1px Inside #0F0F0F26] rounded-2xl'>
                <img className='w-20 ml-7 mt-10 mb-3' src="../../../src/assets/success-patients.png" alt="" />
                <h1 className='text-4xl font-bold ml-7'><CountUp end={1900} duration ={10} />+</h1>
                <p className='ml-7 mt-2'>Cases Initiated</p>
            </div>
            <div className='bg-[#0F0F0F0D] stroke-1 stroke-[1px Inside #0F0F0F26 ] rounded-2xl '>
                <img className='w-20 ml-7 mt-10 mb-3' src="../../../src/assets/success-staffs.png" alt="" />
                <h1 className='text-4xl font-bold ml-7'><CountUp end={300} duration ={10} />+</h1>
                <p className='ml-7 mt-2'>Total Stuffs</p>
            </div>
            </div>
        </div>
    );
};

export default Counter;