import { React, useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import './Home.css';
import heroImg01 from '../../assets/images/hero-img01.png'
import icon01 from '../../assets/images/icon01.png'
import icon02 from '../../assets/images/icon02.png'
import icon03 from '../../assets/images/icon03.png'
import RequestAppointment from '../../components/Appointment/RequestAppointment';
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import About from '../../components/About/About';
import ServiceList from '../../components/Services/ServiceList';
import video01 from '../../assets/video/video01.mp4';
import video02 from '../../assets/video/video02.mp4';
import FaqList from '../../components/FAQ/FaqList';
import faq from '../../assets/images/faq.jpg';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isAdmin, setAdmin] = useState(false);
  const clickHandler = () => {
    setShowAppointmentForm(prevState => !prevState);
    setPopup(true);
    // console.log(popup);
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === 'doctor') {
      setAdmin(true);
    }
  }, []);

  return (
    <>
      <section className='hero'>
        <Header />
        <div className='container mx-auto mt-[-55px] md:pb-[40px]'>
          <div className='flex flex-col md:flex-row'>
            <div>
              <div className='md:my-3 md:ml-[70px] ml-[10px]' >
                <h1 className='text-black font-bold overflow-hidden text-lg mb-3 md:w-[500px]' >We help Patients live a healthy, longer life.</h1>
                <p className='text-secondary font-normal md:w-[500px]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsam cumque laudantium aliquam quam provident doloremque deleniti asperiores quaerat ad rerum ab aspernatur quos natus deserunt labore corrupti, magnam enim.</p>
             {!isAdmin ? (  <button className='bg-[#1D40AF] text-white px-4 my-5 py-2 rounded-lg' onClick={clickHandler}>
                  Request An Appointment
                </button>
                ):(<div>
                  <Link to={"/consultants"}>
                   <button className='bg-[#1D40AF] text-white px-4 my-5 py-2 rounded-lg' >
                  Let Start the Consultation
                </button>
                </Link> 
                </div>)} 
              </div>


              <div className='flex flex-row gap-5 md:ml-[70px] ml-[10px]'>
                <div style={{ marginTop: "30px" }}>
                  <div className=' pr-4 border-r-4 border-yellow-600'>
                    <h2 className=' text-red-600  font-bold text-xl'>10+</h2>
                    <p className='text-red-500 font-medium'>Years of Experience</p>
                  </div>

                </div>
                <div style={{ marginTop: "30px" }}>
                  <div className=' pr-4 border-r-4 border-yellow-600'>
                    <h2 className=' text-red-600  font-bold text-xl'>20+</h2>
                    <p className='text-red-500 font-medium'>Clinic Locations</p>
                  </div>

                </div>
                <div style={{ marginTop: "30px" }}>
                  <div className=' pr-4 border-r-4 border-yellow-600'>
                    <h2 className=' text-red-600  font-bold text-xl'>100%</h2>
                    <p className='text-red-500 font-medium'>Patient Satisfaction</p>
                  </div>
                </div> </div>
            </div>
            <div >
              <div className='md:mt-[-45px]'>
                <img src={heroImg01} alt="" style={{ height: "450px", width: "450px", marginTop: "10px" }} className='md:ml-[200px]'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showAppointmentForm && <RequestAppointment popup />}

      <section className='hero_section pt-5'>
        <div className="container mx-auto">
          <div >
            <h2 className='text-center pt-5 font-semibold text-[30px]'>Providing the Best <span className='text-[#1d40af]'>Medical </span> services </h2>
            <p className='text-center text-[#686765] text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, libero?</p>
          </div>
          <div className="flex flex-col md:flex-row mt-5">
            <div>
              <div className="px-5 py-5">
                <div >
                  <img src={icon01} alt="" className='mx-9' style={{ height: "200px", width: "300px" }} />
                </div>

                <div className='mt-5'>
                  <h2 className='text-center text-2xl font-semibold'>Find a Doctor</h2>
                  <p className='text-[#686765] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit impedit accusantium repudiandae id animi tempora recusandae! Voluptatum, officia provident.</p>
                  <div className='text-center '>
                    <Link to='/consultants' >
                      <DoubleArrowIcon className='mt-3 text-black text-[90px] rounded-full hover:bg-[#1D40AF] hover:text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="px-5 py-5">
                <div >
                  <img src={icon02} alt="" className='mx-9' style={{ height: "200px", width: "300px" }} />
                </div>

                <div className='mt-5'>
                  <h2 className=' text-center text-2xl font-semibold'>Find a Location</h2>
                  <p className='text-[#686765] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit impedit accusantium repudiandae id animi tempora recusandae! Voluptatum, officia provident.</p>
                  <div className='text-center '>
                    <Link to='/contact' >
                      <DoubleArrowIcon className='mt-3 text-black text-[90px] rounded-full hover:bg-[#1D40AF] hover:text-white' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4  gap-5 ">
              <div className="px-5 py-5">
                <div className="d-flex">
                  <img src={icon03} alt="" className='mx-9' style={{ height: "200px", width: "300px" }} />
                </div>

                <div className='mt-5'>
                  <h2 className=' text-center text-2xl font-semibold'>Book Appointment</h2>
                  <p className='text-[#686765] mt-4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque odit impedit accusantium repudiandae id animi tempora recusandae! Voluptatum, officia provident.</p>
                  <div className='text-center '>
                    <Link to='/consultants' >
                      <DoubleArrowIcon className='mt-3 text-black text-[90px] rounded-full hover:bg-[#1D40AF] hover:text-white' />

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white'>
        <About />
      </section>

      <section className='pt-5 bg-[#F5F5F5]'>
        <div className="container mx-auto">
          <div >
            <h2 className="text-center font-bold text-3xl mt-7">Our <span className='text-[#1d40af]'>Medical</span> & <span className='text-[#1d40af]'>Fitness</span> Services</h2>
            <p className="text-[#686765] text-lg text-center mt-2">
              World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>
          <ServiceList />
        </div>
      </ section>

      <section className='pt-5 bg-white'>
        <div className="container mx-auto ">
          <div className=" flex items-left justify-between flex-col lg:flex-row " >
            <div className="xl:w-[670px]">
              <h2 className="text-4xl abc mt-[90px]" >Get <span className='text-[#1d40af]'>Virtual Treatment </span> anytime <br />& anywhere</ h2>
              <ul className="pl-2 pt-5">
                <li className="text-lg" > 1. Schedule the appointment directly.</li>
                <li className="text-lg mt-1">2. Search for your physician here, and contact them directly.</li>
                <li className="text-lg mt-1">3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.</li>
                <li className="text-lg mt-1">4. Search for your physician here, and contact them directly.</li>

              </ul>
              <Link to="/"><button className="bg-[#1D40AF] text-white rounded-lg mt-5 py-2 px-4">Learn More <KeyboardDoubleArrowRightIcon /></button>
              </Link>
            </div>

            <div className="pt-8 relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <video width="600" height="400"  autoPlay muted loop>
                <source src={video02} type="video/mp4" />
              </video>
              <div className="w-[150px] lg:w-[450px] bg-[rgba(255,255,255,0.4)] absolute top-[60px] left-0 md:top-[230px] 
md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center gap-[6px] lg:gap-[10px] ">
                  <video width="450" height="400"  autoPlay muted loop>
                    <source src={video01} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='pt-[120px] bg-white pb-8'>
        <div className="container mx-auto ">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block mt-5">
              <img src={faq} alt="faq" className='rounded-xl bg-[rgba(25,15,25,0.1)] p-2 mt-2' style={{ height: "600px" }} />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl abc mt-[50px]">Most<span className='text-[#1d40af]'> Questions </span> by our beloved <br /> patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
<div className='bg-white'>
      <section className='bg-[#F5F5F5] pt-4 pb-6 ' >
        <div className="container mx-auto">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="pt-9 text-center abc text-4xl mb-3">What our <span className='text-[#1d40af]'>Patients </span>say</h2>
            <p className="text-gray-700 text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
   
      <section className="mt-10">
        <Footer />
      </section>
      </div>
    </>
  )
}

export default Home