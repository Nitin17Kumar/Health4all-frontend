import React, {  useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import Logo from '../../assets/images/logo.png';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  {
    path: '/',
    display: 'Home',
  },
  {
    path: '/consultants',
    display: 'Consultation',
  },
  {
    path: '/yoga',
    display: 'Yoga ',
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact',
  }
];


const Header = () => {
   
  const headerRef = useRef(null);
  const navigate = useNavigate();
const menuRef = useRef(null);

const handleStickyHeader = () => {
  window.addEventListener('scroll', () => {
    if (headerRef.current) { // Check if headerRef.current is not null
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    }
  });
};

useEffect(() => {
  handleStickyHeader();
  return () => window.removeEventListener('scroll', handleStickyHeader);
}, []);

const toggleMenu = () => {
  menuRef.current.classList.toggle('show_menu');
}

function logoutHandler(){
  localStorage.removeItem("authToken");
  navigate('/');
}

  return (
    <header ref={headerRef}>
      <div className="flex">
        <div className='z-0 justify-center'>
          <Link to={"/"}>
          <img src={Logo} style={{ width: '300px', position:"relative" }} alt="logo" className=' top-5 md:top-0 md: mt-[-120px]'/>
          </Link>
        </div>
        
        <div className="flex  hidden md:block navbar navigation" ref={menuRef} onClick={toggleMenu}>
        <ul className="flex flex-col md:flex-row my-4 md:ml-[100px]" style={{ listStyleType: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.path} className='mx-5'> 
           {localStorage.getItem("authToken") ? (
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-[#AD7800] font-bold'
                        : 'text-blue-800 font-bold'
                    }
                  >
                    {link.display}
                  </NavLink>
                ) : (
                  // If token is false, change the display of Doctors to Consultation
                  link.display === 'Consultation' ? (
                    <NavLink
                      to="/consultants"
                      className={(navClass) =>
                        navClass.isActive
                          ? 'text-[#AD7800] font-bold'
                          : 'text-blue-800 font-bold'
                      }>
                     Find Doctor
                    </NavLink>
                  ) : (
                    // For other links, keep the original display
                    <NavLink
                      to={link.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? 'text-[#AD7800] font-bold'
                          : 'text-blue-800 font-bold'
                      }
                    >
                      {link.display}
                    </NavLink>
                  )
                )}
              </li>
            ))}
          {localStorage.getItem("authToken")  ? (<div className='flex md:ml-[150px] abc'>
  
            <Link to="/dashboard">
                <button className="bg-[#1D40AF] py-1 px-4 rounded-md text-white font-weight-500 flex mx-3" >
                  Dashboard
                </button>
              </Link>
            <button className="bg-red-800 py-1 px-4 rounded-md text-white font-weight-500 flex" onClick={logoutHandler}>
                  Logout
                </button>

              

          </div>):(     <div className='flex md:ml-[150px] abc'>
              <Link to="/login" className="btn1">
                <button className="bg-[#1D40AF] py-1 px-4 mx-4 mt-1 md:mx-0 md:mt-0 rounded-md text-white font-weight-500 flex" >
                  Login
                </button>
              </Link>

           

            </div>)}
          </ul>
       
          </div>
          

          <div className="md:hidden text-[30px] " onClick={toggleMenu}>
            <BiMenu className="cursor-pointer ml-[70px] my-5 justify-end" />
          </div>
        </div>

      </header>


  );
};

export default Header;
