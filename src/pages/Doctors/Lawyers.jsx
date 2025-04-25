import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Lawyer';

const Doctors = () => {
    const [lawyers, setLawyer] = useState([]);
    const [ShowMore, setShowMore] = useState(false);

        const lawyerToShow = ShowMore ? lawyers : lawyers.slice(0, 6);

        const handleShowMore = () => {
            setShowMore(!ShowMore);
        }
        

    useEffect(() => {
        fetch('lawyersData.json')
            .then(res => res.json())
            .then(data => setLawyer(data))
    }, [])
    
    return (
        
        <div>
            <h2 className='text-3xl font-bold text-center mt-5 mb-2'>Our Best Lawyers</h2>
            <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3'>
            {
                lawyerToShow.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
            }
        </div>
        {
            !ShowMore && (
                <div className='flex justify-center mt-5'>
        <button onClick={handleShowMore} className="btn bg-[#0EA106] text-white rounded-4xl">Show All Lawyer</button>
        </div>
            )
        }
        </div>
      
        
    );
};

export default Doctors;