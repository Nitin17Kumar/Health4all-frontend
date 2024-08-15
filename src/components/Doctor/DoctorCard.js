import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


function DoctorCard({ id, img, name, title, stars, reviews }) {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (i < stars) {
      // If the index is less than stars, push a filled star icon
      starIcons.push(<FontAwesomeIcon icon={faStar} key={i} className="text-yellow-600" />);
    } else {
      // Otherwise, push an empty star icon
      starIcons.push(<FontAwesomeIcon icon={faStar} key={i} className="text-gray-400" />);
    }
  }

  return (
    <div className="dt-card">
      <img src={img} alt={name} className="dt-card-img" />
      <Link to={`/doctor/${id}`}>
        <p className="dt-card-name">{name}</p>
      </Link>
      <p className="dt-card-title font-bold">{title}</p>
      <p className="dt-card-stars">
        <span>
          {starIcons}
        </span>
        <span className="ml-4">
          {stars} / 5
        </span>
        <div className="dt-card-reviews"> ({reviews} Patient )</div>
      </p>
      <div className="mt-3 ml-[40px]">
      <Link to={`/doctor/${id}`}>
      <button className="bg-gray-800 text-gray-100 font-semibold px-2 pr-4 rounded-lg py-1">Learn More <DoubleArrowIcon/></button>
      </Link>        
      </div>
    </div>
  );
}

export default DoctorCard;
