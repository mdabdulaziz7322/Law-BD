import React from 'react';

const Doctor = ({doctor}) => {
    return (
        <div className="card card-side bg-base-100 shadow-sm border-1 rounded-3xl p-5 m-5">
  <figure>
    <img className='w-50 h-50 rounded-3xl mr-5 ml-5'
      src={doctor.image}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <div>
    <button className="btn btn-xs btn-soft bg-[#09982F1A] text-[#09982F]  text-sm font-light  mr-5 rounded-full p-2 ">
    Available</button>
    <button className="btn btn-xs btn-soft bg-[#176AE51A] text-blue-500  text-sm font-light  mr-5 rounded-full p-2 ">
    {doctor.experience} Experience</button>
    </div>
    <h2 className="card-title text-2xl">{doctor.name}</h2>
    <p className='text-base text-gray-500 font-light'>{doctor.speciality}</p>
    <p className='text-base text-gray-500 font-light'>License No: {doctor.licenseNumber}</p>
    <div className="card-actions ">
    <button className="btn btn-outline btn-primary rounded-4xl px-15 mt-2">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Doctor;