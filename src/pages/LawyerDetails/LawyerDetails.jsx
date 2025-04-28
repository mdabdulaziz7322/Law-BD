import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import { setToLocalStorage } from '../../utility/localStorage';


const LawyerDetails = () => {
  const lawyerDetails = useLoaderData();



  const { lawyerId } = useParams();
  const convertedId = parseInt(lawyerId);
  const singleLawyer = lawyerDetails.find(lawyer => lawyer.id === convertedId);
  console.log(singleLawyer.availability.index);
  const today = new Date();
  const options = { weekday: 'long' };
  const weekdayName = today.toLocaleDateString('en-US', options);
  const isAvailable = singleLawyer.availability.includes(weekdayName);


  const handleMyBooking = (id) => {
    setToLocalStorage(id);

  }
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/myBooking');

  }




  return (
    <div className='mx-8 '>
      <div className='bg-[#0F0F0F0D] rounded-3xl p-5 mt-10'>
        <h2 className='text-3xl font-bold text-center mt-5 mb-2'>Lawyer’s Profile Details</h2>
        <p className='text-center p-10'>Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat. </p>
      </div>
      <div className="card card-side bg-base-100 shadow-sm border-1 rounded-3xl p-5 mt-5">
        <figure>
          <img className='w-50 h-50 rounded-3xl mr-5 ml-5'
            src={singleLawyer.image}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <div>
            <button className=" btn-xs btn-soft bg-[#176AE51A] text-blue-500  font-light  mr-5 rounded-full p-2 ">
              {singleLawyer.experience} Experience</button>
          </div>

          <h2 className="card-title text-3xl">{singleLawyer.name}</h2>
          <div className='flex max-w-[300px]'>
            <p className='text-base text-gray-500 font-light'>{singleLawyer.speciality}</p>
            <p className='text-base text-gray-500 font-light'>License No: {singleLawyer.licenseNumber}</p>
          </div>
          <div className='flex flex-col lg:flex-row max-w-[250px] items-center gap-3 mt-3'>
            <p> <span className='font-bold'>Availability</span>  </p>

            {
              singleLawyer.availability.map((day, index) =>
              (
                <button key={index} className=" btn-xs btn-softs bg-[#FFA0001A] text-[#FFA000]  font-light  mr-2 rounded-full py-1 px-3 ">{day}</button>
              )
              )
            }

          </div>
          <p className='font-bold mt-3'>Consultation Fee: <span className='text-[#0EA106]'>${singleLawyer.fee} /hour</span> </p>

        </div>
      </div>
      <div className="card card-side bg-base-100 shadow-sm border-1 rounded-3xl p-5 mt-5">

        <div className="card-body">
          <h2 className='text-2xl font-semibold text-center'>Book an Appointment</h2>

          <hr className='border-1 border-dashed text-gray-400 mt-2 '></hr>



          <div className='flex items-center justify-between gap-3 mt-3'>
            <p className='text-base text-black font-bold'>Availability</p>

            <button className={` btn-xs btn-softs font-light  mr-2 rounded-full py-1 px-3 ${isAvailable? "bg-[#6cfa341a] text-[#008243]" : "bg-[#ff6e4e1a] text-[#ff0000]" } `}>{isAvailable? "available" : "Not Available"}</button>
          </div>
          <hr className='border-1 text-gray-300 mt-3 '></hr>
          <button className=" btn-xs btn-softs bg-[#FFA0001A] text-[#c87f00]  font-light  mr-2 rounded-full py-2 px-3 mt-4 text-left  ">Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>

          <button disabled={!isAvailable && "disabled" } type='button' onClick={() => { handleNavigate(); handleMyBooking(singleLawyer.id) }} className={`btn btn-xs btn-soft text-white  text-base  mt-4  mx-20 rounded-full p-5 ${isAvailable? "bg-[#0EA106]": "bg-red-700 cursor-not-allowed "}`}>{isAvailable? "Book Appointment Now" : "Not Available Today"} </button>

        </div>
      </div>
    </div>
  );
};

export default LawyerDetails;