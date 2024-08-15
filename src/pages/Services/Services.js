import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
import video03 from '../../assets/video/video03.mp4';
import Exercise from "./Exercise";
import NutritionChecker from "./NutritionChecker";
import BmrCalculator from "./BmrCalculator";

const Services = () => {
  useEffect(() => {
    const videoplay = document.getElementById("video03");
    if (videoplay) {
        videoplay.playbackRate = 0.3;
    }
}, []);

return (
  <>
  <div className=" pt-3 pb-[-3]">
  <Header />
  </div>
  <div className="mt-[-100px] flex overflow-hidden"> 

    <video width="60%"  autoPlay muted  loop id="video3" className="md:mx-[-40px]">
              <source src={video03} type="video/mp4" />
            </video>

    <video width="60%"  autoPlay muted  loop id="video3 " className="mx-[-40px] ">
              <source src={video03} type="video/mp4" />
            </video>
  </div>

     <div className=" container mx-auto mt-8">
       <div className="mt-5 mb-5 text-center ">
         <h1 className="text-4xl font-bold">Our Health Services</h1>
         <h5 className="mb-5 text-gray-500 ">Best Services Provided to Check and Regulates the Health Problem</h5>
       </div>

       {/* Workout Database */}
       <div className="mt-8">
        <Exercise />
       </div>
       <div className="mt-8">
        <NutritionChecker />
       </div>
       <div className="mb-7">
        <BmrCalculator />
       </div>
      
     </div>
   <Footer/>
     </>
  );
};

export default Services;
