import React, { useEffect, useState, useCallback } from "react";
import Doctor from "../../assets/images/faq.jpg";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import "./Consultant.css";
import axios from "axios";
import toast from "react-hot-toast";
import Doctors from "../../components/Doctor/Doctors";
import RequestAppointment from "../../components/Appointment/RequestAppointment";

function Consultant() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [latestCode, setLatestCode] = useState('');
  const [popup, setPopup] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const [goUp, setGoUp] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === 'doctor') {
      setAdmin(true);
    }
  }, []);

  const handleBookAppointmentClick = () => {
    setShowAppointmentForm(prevState => !prevState);
    setPopup(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleClick = async () => {
    console.log("Fetching latest code...");
    try {
      const response = await axios.get('https://health4all-backend.onrender.com/api/v1/booking/latest-code');
      console.log('Code fetched:', response.data);
      if (response.data && response.data.code) {
        setLatestCode(response.data.code); // Ensure the state is updated
      } else {
        console.error('Invalid response format:', response.data);
        toast.error("Invalid response format.");
      }
    } catch (error) {
      console.error('Error fetching latest code:', error);
      toast.error("Error fetching latest code. Please try again later.");
    }
  };

  const handleJoinRoom = useCallback(() => {
    navigate(`/room/${value}`);
  }, [navigate, value]);

  return (
    <>
      <Header />
      <div className="section-container mt-[-100px]">
        <div className="hero-section">
          <div className="text-section">
            <p className="text-headline">❤️ Health comes first</p>
            <h2 className="text-title">
              Find your Doctor and make an Appointments
            </h2>
            <p className=" mt-2">
              Talk to online doctors and get medical advice, online prescriptions,
              refills and medical notes within minutes. On-demand healthcare
              services at your fingertips.
            </p>
            {!isAdmin ? (
             <button
              className="text-appointment-btn mt-5"
              type="button"
              onClick={handleBookAppointmentClick}
            >
              Book Appointment
            </button> 
            ):( <> 
            <button
              className="text-appointment-btn mt-5"
              type="button"
              onClick={handleClick}
            >
              Let See the Code & Consult with Your Patient
            </button>
            {latestCode && <h1 className="text-lg text-red-800 font-bold mt-2 mx-5">Code is: {latestCode}</h1>} </> )}
            <div className="text-stats">
              <div className="text-stats-container">
                <p>145k+</p>
                <p>Receive Patients</p>
              </div>
              <div className="text-stats-container">
                <p>50+</p>
                <p>Expert Doctors</p>
              </div>
              <div className="text-stats-container">
                <p>10+</p>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
          <div className="hero-image-section">
            <img className="hero-image1 rounded-2xl" src={Doctor} alt="Doctor" />
          </div>
        </div>
        {!localStorage.getItem("authToken") ? (
          <div></div>
        ) : (
            <div className="text-center mt-2 h-[350px] pt-[50px]">
             <h1 className="text-center text-4xl my-7 font-bold text-red-900 tracking-widest">
             <u className="underline-offset-8">   Join The Consultation Room</u>
              </h1>
              <div className="mt-8">
              <input
                type="text"
                placeholder="Enter Room Code"
                value={value}
                className="border-2 p-2 rounded-xl placeholder:px-2"
                onChange={(e) => setValue(e.target.value)}
              />
              <button onClick={handleJoinRoom} id="abc" className="mx-3 px-4 bg-red-800 text-white p-2 rounded-xl">
                Join The Consultation
              </button>
              <p className="text-center mt-7 font-medium">
                Here Enter the Code that is Generated to go in the Consultation Room to Consult with the Patient & Doctor 
              </p>
              </div>
            </div>
        )}
        {showAppointmentForm && <RequestAppointment popup />}
        <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : ""}`}>
        </div>
        {!localStorage.getItem("authToken") ? (
          <div>
            <Doctors />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Consultant;
