import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getDataFromLocalStorage, removeFromLocalStorage } from "../../utility/localStorage";
import { Bar, BarChart, CartesianGrid, Cell, Tooltip, XAxis, YAxis } from "recharts";






const MyBooking = () => {
    const [bookedLawyers, setBookedLawyers] = useState([]);
    
    const data = useLoaderData();

    useEffect(() => {
        const storedBookings = getDataFromLocalStorage();
        const bookedLawyers = data.filter( lawyer =>  storedBookings.includes(lawyer.id));
        setBookedLawyers(bookedLawyers);
    }, [data]);

    const handleRemoveBooking = (id) => {
        const RemainingLAwyers = removeFromLocalStorage(id);
        setBookedLawyers(RemainingLAwyers);
    }

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
      );
      
      const TriangleBar = (props) => {
        const {
          fill, x, y, width, height,
        } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#d0ed57', '#a4de6c', '#ffbb28', '#ff6666', '#9966cc'];
      console.log(COLORS.length)
       

    return (

        <div>
            {
                bookedLawyers.length === 0 ? (
                    <div className="flex justify-center items-center flex-col mx-auto mt-50">
                        <img className="w-60" src="../../../src/assets/shopping-cart.png" alt="" />
                        <h3 className="text-3xl font-bold">Your Booking Chart is Empty</h3>
                        <Link to = {'/'}><button className="btn btn-secondary mt-8 px-10">Home</button></Link>

                    </div>
                ) : (

                    <div>
                        <div className="mt-10 mb-5">
                            <BarChart width={1400} height={500} data={bookedLawyers}>
                                <CartesianGrid stroke="gray" strokeDasharray={5}></CartesianGrid>
                                <XAxis dataKey={'name'}></XAxis>
                                <YAxis></YAxis>
                                <Tooltip></Tooltip>
                                <Bar dataKey={'fee'} barSize={100} shape={<TriangleBar></TriangleBar>}>
                                {
                                    bookedLawyers.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}></Cell>
                                    )) 
                                }
                                </Bar>
                                
                                
                            </BarChart>
                        </div>

                        <h2 className='text-3xl font-bold text-center mt-5 mb-2'>My Today Appointments</h2>
                        <p className='text-center font-light mb-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. </p>
                        {
                            bookedLawyers.map(lawyer =>
                                <div key={lawyer.id} className="card-body border-1 border-gray-400 rounded-3xl p-5 mt-8 mx-8">
                                    <div className="flex items-center gap-5 justify-between">
                                        <div>
                                            <h2 className='text-xl font-semibold text-gray-700 mb-1 '>{lawyer.name}</h2>
                                            <p className='text-base text-gray-500 font-light'>{lawyer.speciality}</p>
                                        </div>
                                        <div>
                                            <p className='text-base text-gray-500 font-light'>Appointment Fee : ${lawyer.fee} /hour </p>
                                        </div>
                                    </div>

                                    <button onClick={() => handleRemoveBooking(lawyer.id)} className="btn btn-outline  rounded-4xl mt-4 mx-15 text-red-600 mb-3">Cancel Appointment</button>

                                </div>

                            )
                        }

                    </div>
                )

            }
        </div>
    );
};

export default MyBooking;