/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import { Button } from 'react-bootstrap'
import AboutUs from './About'
import Partner from './Partner'
import Courses from './Courses';
import bgImg from '../../assets/img/yoga-1.jpg'
import './Yoga.css';

function Yoga() {
  return (
    <>
     <Header />

     <section className='mx-3 md:mx-0 mt-[-70px] md:mt-[-150px]' >
        <div className=''>
          <div className='relative text-right md:right-[200px] md:top-[200px]'>
            <p  className=' text-blue-800 md:text-[40px] font-bold'><span className='text-red-800 md:text-[40px] font-bold mx-2'>Health4All</span> Presents</p>

            <h1 className='mt-3 md:text-3xl text-green-900 font-semibold '>The top yoga and <br /> wellness platform</h1>
            <p className='text-lg md:text-2xl mt-5 font-medium'>Wherever, whenever, just for you. </p>
            <p className='text-lg md:text-2xl my-1 font-medium'>Spreading wellness since 2020.</p>
            <p className='mt-5 font-medium'>Discover the ultimate yoga and wellness hub, offering diverse practices,</p>
            <p className='font-medium'> expert guidance, and innovative tools, fostering community support  </p> 
            <p className='font-medium'>for holistic well-being and personal growth</p>

            <div className='btn-content mt-9'>
              <Button className='bg-green-800 text-white px-3 py-1 rounded'>Book Now</Button>
            </div>
          </div>

          <div className='md:mt-[-350px] mt-4'>
            <img src={bgImg} alt='' className='w-[100%]' />
          </div>

        </div>

     </section>

     <section className='about' id='about'>
      <AboutUs />
     </section>

     <section className='course' id='course'>
      <Courses />
     </section>

     <section className='sponsor' id='sponsor'>
      <Partner />
     </section>

     <Footer />
    </>
  );
}

export default Yoga;
