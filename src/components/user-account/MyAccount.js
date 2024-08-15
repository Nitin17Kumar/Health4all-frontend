import React, { useContext, useEffect, useState } from 'react';
import MyBooking from './MyBooking';
import Profile from './Profile';
import { AuthContext } from '../../context/AuthContext';
import { Spinner } from 'react-bootstrap';
import QRCode from 'qrcode.react';
import { Link, useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';

const MyAccount = () => {
    const userData = {
        name: localStorage.getItem("name"),
        userId: localStorage.getItem("userId"),
        bloodType: 'A-',
        role: localStorage.getItem("role")
    };
    const [isAdmin, setAdmin] = useState(false);
    const [booking, setBooking] = useState([]);
    const [tab, setTab] = useState('settings');
    const [loadingBookings, setLoadingBookings] = useState(true);


    const { loading } = useContext(AuthContext);
    console.log(userData.userId);
    const navigate = useNavigate();

    const handleLogout = () => {
       localStorage.removeItem("authToken");
       navigate('/');
    };

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const response = await fetch(`https://health4all-backend.onrender.com//api/v1/booking/allbooking?userId=${userData.userId}`);
                const data = await response.json();
                setBooking(data.bookings || []); // Adjust according to the actual structure of the response
            } catch (error) {
                console.error('Error fetching booking:', error);
            } finally {
                setLoadingBookings(false);
            }
        };

        fetchBooking();
    }, [userData.userId]);


    useEffect(() => {
        const role = localStorage.getItem("role");
        if (role === 'doctor') {
          setAdmin(true);
        }
      }, []);

    return (
        <section className="bg-gray-100 min-h-screen py-10 pt-[120px]">
            <Link to={'/'}>
                <CancelIcon className='absolute right-10 top-10 text-red-600 hover:text-red-900'/>
            </Link>
            <div className='flex'>
                <div className='max-w-5xl mx-auto'>
                    {loading && <Spinner />}

                    {!loading && (
                        <div className='grid md:grid-cols-3 gap-10 bg-white p-6 rounded-lg shadow-md'>
                            <div className='border-r-2 border-gray-200 p-4'>

                                {booking.length > 0 && booking[0].user && 
                                console.log(booking[0].user.name)}

                                <div className="flex flex-col items-center">
                                    {/* QR Code Generator */}
                                    <QRCode 
                                        value={`Name: ${userData.name}, User ID : ${userData.userId}, Blood Type: ${userData.bloodType},
                                        Bookings: ${JSON.stringify(booking)}`} 
                                        size={100}
                                        level={"H"}
                                        includeMargin={true}
                                    />

                                    <div className="text-center mt-4">
                                        <h3 className="text-xl font-semibold text-headingColor">{userData.name || 'User Name'}</h3>
                                        <p className="text-gray-600">{userData.userId || 'user@example.com'}</p>
                                        <p className="text-gray-600 mt-2">Blood Type: <span className="font-bold text-headingColor">{userData.bloodType || 'Unknown'}</span></p>
                                    </div>
                                </div>

                                <div className='mt-20'>
                                    <button onClick={handleLogout} className='w-full bg-red-600 text-white py-3 rounded-md font-medium'>
                                        Logout
                                    </button>
                                    <button className='w-full bg-red-600 mt-4 py-3 rounded-md text-white font-medium'>
                                        Delete account
                                    </button>
                                </div>
                            </div>
                            <div className='md:col-span-2 p-4'>
                                <div className='flex mb-5'>
                                 {!isAdmin ? (   <button onClick={() => setTab('bookings')} className={`p-2 mr-5 px-5 rounded-md font-semibold ${tab === 'bookings' ? 'bg-blue-800 text-white' : 'border border-blue-500 text-blue-600'}`}>
                                        My Bookings
                                    </button>) :(<div></div>)}
                                    <button onClick={() => setTab('settings')} className={`p-2 px-5 rounded-md font-semibold ${tab === 'settings' ? 'bg-blue-800 text-white' : 'border border-blue-500 text-blue-600'}`}>
                                        Profile Settings
                                    </button>
                                </div>
                                {tab === 'bookings' && (loadingBookings ? <Spinner /> : <MyBooking bookings={booking} />)}
                                {tab === 'settings' && <Profile user={userData} />}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyAccount;
