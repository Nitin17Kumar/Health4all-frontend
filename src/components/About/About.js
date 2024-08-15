import { Link } from "react-router-dom";
import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#FFFFFF]">
        <div className="container px-3 py-[50px] mx-auto">
          <div className="flex flex-wrap -m-1">
            <div className="p-4 md:w-1/3">
              <div className="p-5">
                <h5 className="tracking-widest text-2xl title-font font-bold text-[#AE7E18] mb-1">
                  Health4All
                </h5>
                <h1 className="title-font mt-2 text-4xl font-bold text-[#1D40AF] mb-3">
                  A 360&#176; System
                </h1>
                <p className="leading-relaxed mb-3 font-medium text-gray-500">
                  Health is not a destination but a journey. Enrich your health
                  and well-being with our wellness services.
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 shadow-xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://d28c6jni2fmamz.cloudfront.net/Test_6b932c0bf6.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-black mb-3">
                  Consult with Health4All
                  </h1>
                  <p className="leading-relaxed mb-3 font-medium">
                    Free, expert telemedicine facility
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="text-[#1D40AF] hover:text-red-500 font-medium inline-flex items-center md:mb-2 lg:mb-0">
                     <Link to={'/contact'}> Learn More <KeyboardDoubleArrowRightIcon/></Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 shadow-xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://d28c6jni2fmamz.cloudfront.net/Covid_19_3ce2ac46b4.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-black mb-3">
                    COVID-19 Helpline
                  </h1>
                  <p className="leading-relaxed font-medium mb-3">
                    COVID advisory & support
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="text-[#1D40AF] hover:text-red-500 font-medium  inline-flex items-center md:mb-2 lg:mb-0">
                    <Link to={'/contact'}> Learn More <KeyboardDoubleArrowRightIcon/></Link>
              
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 shadow-xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://d28c6jni2fmamz.cloudfront.net/Health_Library_bbacb539c4.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-black mb-3">
                    Health Library
                  </h1>
                  <p className="leading-relaxed mb-3 font-medium">
                    Blogs from our experts
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="text-[#1D40AF] hover:text-red-500 font-medium inline-flex items-center md:mb-2 lg:mb-0">
                    <Link to={'/contact'}>Learn More <KeyboardDoubleArrowRightIcon/></Link>
              
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 shadow-xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://d28c6jni2fmamz.cloudfront.net/OPD_services_7973dc9c63.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-black mb-3">
                    Out Patient Portal
                  </h1>
                  <p className="leading-relaxed mb-3 font-medium">
                    Book your consultation online
                  </p>
                  <div className="flex items-center flex-wrap">
                    <button className="text-[#1D40AF] hover:text-red-500 font-medium inline-flex items-center md:mb-2 lg:mb-0">
                    <Link to={'/login'}>Learn More <KeyboardDoubleArrowRightIcon/></Link>
                
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-300 shadow-xl border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://d28c6jni2fmamz.cloudfront.net/Wellness_7dff2b4c84.svg"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-2xl font-semibold text-black mb-3">
                    Wellness Program
                  </h1>
                  <p className="leading-relaxed mb-3 font-medium">
                    Start your healthy lifestyle
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <button className="text-[#1D40AF] hover:text-red-500 font-medium  inline-flex items-center md:mb-2 lg:mb-0">
                    <Link to={'/services'}>Learn More <KeyboardDoubleArrowRightIcon/></Link>
                     
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
