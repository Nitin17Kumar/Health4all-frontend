import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RequestAppointment.css';
import toast from 'react-hot-toast';
import Appoint from '../../assets/images/appoint.png';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const RequestAppointment = ({ popup }) => {
  // Get logged-in user info from context
  const [data, setData] = useState({ doctorId: "", ticketPrice: "" });
  const [doctors, setDoctors] = useState([]);
  const [bookingCode, setBookingCode] = useState("");
  const [popup1, setPopup1] = useState(popup);
  const navigate = useNavigate();
  const user = localStorage.getItem("userId");
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://health4all-backend.onrender.com/api/v1/doctor/alldoctor/');
        setDoctors(response.data.doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://health4all-backend.onrender.com/api/v1/booking/book-appointment', { ...data, userId: user});
      console.log('Appointment request submitted:', response.data);
      setBookingCode(response.data.booking.code); // Set the booking code
      toast.success("Appointment Request Submitted Successfully! We will get back to you soon.");
    
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      toast.error("Error submitting appointment request. Please try again later.");
    }
  }

  const handleClosePopup = () => {
    setPopup1(false); // Close the popup
  }

  return (
    <div>
      {popup1 && (
        <div className="popup-background">
          <div className="popup-container">
            <div className="popup-content">
              <form onSubmit={handleSubmit} className='ml-[80px] mr-[40px] mt-[20px]'>
                <div className='text-center'>
                  <h1 className='text-3xl mb-9 font-extrabold'>Book Your Appointment </h1>
                </div>
                <div className='text-left text-lg mb-3'>
                  <div>
                  <label className='text-xl font-medium'>Select Your Doctor</label>
                  </div>
                  <select name="doctorId" value={data.doctorId} onChange={handleChange} required className='text-gray-400 p-1 px-9 my-3 bg-[rgba(255,255,255,0.2)] rounded-lg outline-none'>
                    <option value="" className=' '>Select Doctor</option>
                    {doctors.map((doctor) => (
                      <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
                    ))}
                  </select>
                </div>
                <div className='text-left text-lg'>
                  <label className='text-xl font-medium' >Ticket Price</label>
                  <input 
                    type="text" 
                    name="ticketPrice" 
                    value={data.ticketPrice} 
                    required
                    className='bg-[rgba(255,255,255,0.2)] pl-3 p-1 my-2 text-white outline-none rounded-lg'
                    onChange={handleChange} 
                  />
                </div>
                <button type="submit" className='bg-[#1d40af] pl-[20px] pr-[100px] ml-[-40px] py-2 my-2 mt-5 rounded-lg text-lg'>
                  Submit <DoubleArrowIcon />
                </button>
              </form>
              
              {bookingCode && (
                <div className="text-white text-center text-xl font-semibold mt-3 ">
                  <p className='text-center text-xl'>Your booking code:</p>
                  <div className='text-center text-2xl font-extrabold mt-1'>
                  <h3 className=''>{bookingCode}</h3>
                  </div>
                </div>
      )}
              <button onClick={handleClosePopup} className='absolute top-[170px] right-[300px] bg-red-600 font-bold text-[20px] rounded-full px-2'>X</button>
            </div>
            <div>
              <img src={Appoint} alt="appointment" style={{ height: "430px", width: "600px" }} className='rounded-lg cover' />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RequestAppointment;
