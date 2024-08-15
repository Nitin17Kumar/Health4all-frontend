import {React, useState} from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import log from '../../assets/data/info.svg'
import register from '../../assets/data/register.svg';
import './Login.css';

const LoginOption = () => {
    const [isSignUp, setSignUp] = useState(false);
  return (
    <>
    <div className='mb-[-105px]'>
    <Header/>
    </div>
    <div className={`${isSignUp ? "signin-signup-container sign-up-mode" : "signin-signup-container"}`}>
            <Link to="/">
                <span className="pageCloseBtn"><FaTimes /></span>
            </Link>
            <div className="forms-container">
                <div className="signIn-singUp">
                <SignIn />
                    <SignUp  />
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
                        <button className="iBtn " onClick={() => setSignUp(true)}>Sign Up</button>
                    </div>
                    <img src={`${log}`} alt="" className="pImg" />
                </div>

                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi beatae quas magnam!</p>
                        <button className="iBtn " onClick={() => setSignUp(false)}>Sign In</button>
                    </div>
                    <img src={`${register}`} alt="" className="pImg" />
                </div>
            </div>
        </div>

    <Footer />
    </>
  )
}

export default LoginOption






