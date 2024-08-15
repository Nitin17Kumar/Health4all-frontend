import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const ServiceCard = ({item, index}) => {
    const {name, desc, bgColor, textColor}=item;

  return (
        <div className="py-[30px] px-3 lg:px-5 shadow-2xl bg-white rounded-xl">
   <h2 className="text-[26px] leading-9 font-[700]">
 {name}</h2>
 <p className="hidden md:block text-[16px] leading-7 font-[400] text-textColor mt-4">{desc}</p>
 <div className="flex items-center justify-between mt-[30px]">
<Link to="/consultants" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px]
 mx-auto flex items-center justify-center group hover:bg-[#1D40AF] hover:border-none">
<BsArrowRight className=" group-hover:text-white  w-6 h-5"/>
</Link>

<span style={{background: `${bgColor}`, 
color: `${textColor}`, 
borderRadius: "6px 0 0 6px"}}
className = "w-[44px] h-[44px] mt-8 flex items-center justify-center text-[18px] leading-[30px] font-[600]">
{ index + 1}
</ span>
</div>
</div>
);
  
}

export default ServiceCard
