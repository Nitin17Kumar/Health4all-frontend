import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo1.svg'

import { AiFillYoutube, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
const Footer = () => {


  const socialLinks = [
    {
      path: "www.youtube.com",
      icon: <AiFillYoutube className='group-hover-white w-4 h-5'/>
    },
    {
      path: "www.github.com",
      icon: <AiFillGithub className='group-hover-white w-4 h-5'/>
    },
    {
      path: "www.instagram.com",
      icon: <AiFillInstagram className='group-hover-white w-4 h-5'/>
    },
    {
      path: "www.linkedin.com",
      icon: <AiFillLinkedin className='group-hover-white w-4 h-5'/>
    },
  ];

  const quickLinks01 = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/",
      display: "About Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/",
      display: "Blog",
    },
  ];

  const quickLinks02 = [
    {
      path: "/find-a-doctor",
      display: "Find a Doctor",
    },
    {
      path: "/",
      display: "Request an Appointment",
    },
    {
      path: "/",
      display: "Find a Location",
    },
    {
      path: "/",
      display: "Find a Opinion",
    },
  ];

  const quickLinks03= [
    {
      path: "/",
      display: "Donate",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
  ];
  const year = new Date().getFullYear()

  return (
    <footer className='mt-5 pt-10 bg-[#172b34] text-white mb-0 pb-0'>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] mb-12">
          <div className='md:h-[200px] mt-[-200px] ml-[-100px]'>
            <img src={logo} alt="" style={{height:"550px"}}/>
            <p className='mt-[-210px]  ml-[120px] md:ml-[160px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Explicabo, accusamus! Lorem ipsum dolor sit amet <br/> 
            consectetur adipisicing elit. Lorem</p>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-2 md:mb-6 text-center md:text-left'>Quick Links</h2>
            
          <ul className='text-center'>
            {quickLinks01.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-2 md:mb-6 text-center md:text-left'>Services Offered</h2>
            
          <ul className='text-center'>
            {quickLinks02.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          </div>

          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-2 md:mb-6 text-center md:text-left '>Support</h2>
            
          <ul className='text-center'>
            {quickLinks03.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>
                  {item.display}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
      <div className='text-center border-t-2 bg-[#0e1f26] text-white pb-2 '>
      <p className='text-[16px] leading-7 font-[400] pt-4'>
              Copyrght © {year} developed by Nitin Kumar all rights reserved
            </p>
            <div className='flex items-center justify-center gap-3 mt-4 '>
              {socialLinks.map((link, index) => (
                <Link to={link.path}
                key={index}
                className='w-9 h-9 border border-solid border-white hover:bg-white hover:text-black rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            </div>
    </footer>
  )
              }

export default Footer