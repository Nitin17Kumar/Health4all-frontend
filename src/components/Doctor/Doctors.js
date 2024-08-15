import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import { doctors } from "../../assets/data/doctors";
import "./Doctors.css";

function Doctors() {
  const [doctorDetail, setDoctorDetail] = useState(doctors);
 
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to
          providing top-notch healthcare services at Health Plus. Trust in their
          knowledge and experience to lead you towards a healthier and happier
          life.
        </p>
      </div>

      <div className="dt-cards-content">
        {doctorDetail.map((data) => ( 
          <DoctorCard key={data.id}
            id={data.id}
            img={data.Imageurl}
            name={data.name}
            title={data.typeof}
            stars={data.rating}
            reviews={data.patient}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;
