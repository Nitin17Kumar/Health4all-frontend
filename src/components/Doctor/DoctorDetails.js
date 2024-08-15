import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../../assets/data/doctors'; // Import your doctor data
import Header from '../Header/Header';
import { PieChart } from '@mui/x-charts/PieChart';
import Footer from '../Footer/Footer';
const pieParams = { height: 200, margin: { right: 5 } };

function DoctorDetails() {
  const { id } = useParams(); // Retrieve the id parameter from the URL
  const doctor = doctors.find(doc => doc.id === id); // Find the doctor by id
  const [bookappoint, setBookappoint]= useState(false);
  if (!doctor) {
    return <div>Doctor not found</div>;
  }


  function clickHandler(){
setBookappoint(true);
  }
  return (
    <>
<Header />
    <div className='mt-[-100px] container mx-auto'>
    <div>
        <p className='text-center text-4xl font-bold  doctordetail text-white pt-3'>
   Let us know about our Experienced doctors
</p>
</div>

<div className='flex md:flex-row flex-col'>
<div className='md:w-[50%] mt-5'>
      <h1 className='text-3xl text-center font-bold text-red-900 mt-5'>{doctor.name}</h1>
      <p className='text-center mt-1 text-blue-900 font-semibold'> {doctor.typeof}</p>

  {/* Total Rating */}   
  <div className='flex my-5 ml-[190px] mt-8'>
<p className='text-2xl mr-[10px] font-medium'>Overall Rating :   </p>
  <p className='text-2xl font-bold text-yellow-700'> {doctor.rating} / 5.0</p>
  </div>
  <PieChart 
            sx={{}}
          series={[{ data: [{ value: doctor.rating, label: 'Rating of Doctor', color:"maroon"},
        {value: 5-doctor.rating, color: "whitesmoke"}   
          ] }]}
          {...pieParams}
        />

<div className='flex my-5 ml-[150px] mt-8'>
<p className='text-2xl mr-[10px] font-medium'>Total Patient Attended :   </p>
  <p className='text-2xl font-bold text-yellow-700'> {doctor.patient} / 1500</p>
  </div>
       
</div>
<div className='md:w-[50%] mt-5'>
<img src={doctor.Imageurl} alt='doctor' width={"600px"} className='rounded-3xl'/>
</div>
</div>

<p className='text-center text-2xl font-bold my-5 text-red-800 mt-7'>
    Detail of the Doctor And Specialization
</p>
 <p className='text-center text-lg font-medium'>
    {doctor.description}
 </p>
      {/* Add more details as needed */}
      <div className="text-center">
      <button className='px-5 bg-[#1d40af] text-white font-medium rounded-xl py-5 my-4' onClick={clickHandler}>
        Book Appointment
      </button></div>
      {
        bookappoint ? (
        <div className="px-4 py-6 bg-gray-100 md:rounded-b-2xl/40 dark:bg-gray-800 rounded-xl">
        <div className="container flex flex-col gap-2 md:gap-4 justify-center items-center text-center">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl text-red-800 mb-3">Book an Appointment</h2>
            <p className="tracking-wide/[-0.025] text-lg text-gray-800" >
              Enter your information below to book an appointment with our team.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-4">
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className='font-bold text-lg'>First name</label>
                  <input id="first-name" placeholder="Enter your first name"  className='px-2 py-1 rounded-lg'/>
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className='font-bold text-lg'>Last name</label>
                  <input id="last-name" placeholder="Enter your last name" className='px-2 py-1 rounded-lg'/>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className='font-bold text-lg mx-3'>Email</label>
                <input id="email" placeholder="Enter your email" type="email" className='px-2 py-1 rounded-lg'/>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className='font-bold text-lg mx-3'>Phone</label>
                <input id="phone" placeholder="Enter your phone number" type="tel" className='px-2 py-1 rounded-lg'/>
              </div>
              <div className="space-y-2">
                <label htmlFor="date" className='font-bold text-lg mx-3'>Preferred Date</label>
                <input id="date" type="date" className='px-2 py-1 rounded-lg'/>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className='font-bold text-lg mx-3'>
                  Additional Information
                </label>
                <textarea
                  className="min-h-[100px] px-[50px] py-2 rounded-lg"
                  id="message"
                  placeholder="Enter any additional information or questions you have."
          
                />
              </div >
              <button className="mx-12 py-2 rounded-full bg-[#1d40af] text-white " type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div> ): ("")
      }
    </div>
    <Footer className="my-4"/>
    </>
  );
}

export default DoctorDetails;
