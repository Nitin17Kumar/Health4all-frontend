import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaEnvelope, FaLock, FaTimes, FaUser } from 'react-icons/fa';
// import {BASE_URL} from '../config.js';
import toast from 'react-hot-toast';
import HashLoader from 'react-spinners/HashLoader.js'
// import axios from 'axios';;
// password regex
// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
// At least one upper case English letter, (?=.*?[A-Z])
// At least one lower case English letter, (?=.*?[a-z])
// At least one digit, (?=.*?[0-9])
// At least one special character, (?=.*?[#?!@$%^&*-])
// Minimum eight in length .{8,} (with the anchors)


const SignUp = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const [formData, setFormData]=useState({
        name:'',
        email: '',
        password: '',
        gender: 'male',
        role: 'patient'
    });

    const [passwordValidation, setPasswordValidation] = useState({
        carLength: false,
        specailChar: false,
        upperLowerCase: false,
        numeric: false
    })
    const [emailValidation, setEmailValidation] = useState({
        carLength: false,
        specailChar: false,
        upperLowerCase: false,
        numeric: false
    })

    const [emailError, setEmailError] = useState({
        emailError: false
    })

    const handleEmailError = (name, value) => {
        if (name === 'email') {
            setEmailError({
                emailError: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            })
        }
    }
    const hanldeValidation = (name, value) => {
        if (name === 'password') {
            setPasswordValidation({
                carLength: (value.length > 8),
                specailChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
                upperLowerCase: /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
                numeric: /^(?=.*\d)/.test(value),
            })
        }
        if (name === 'email') {
            setEmailValidation({
                carLength: (value.length > 8),
                specailChar: /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value),
                upperLowerCase: /^(?=.*[a-z])(?=.*[A-Z])/.test(value),
                numeric: /^(?=.*\d)/.test(value),
            })
        }
    }

    const hanldeOnChange = (e) => {
        let { name, value } = e.target;
        hanldeValidation(name, value)
        handleEmailError(name, value)
        let isPassValid = true;

        if (value === 'email') {
            isPassValid = /\S+@\S+\.\S+/.test(value);
        }
        if (value === 'password') {
            isPassValid = ((value.length > 8)
                && /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(value)
                && /^(?=.*[a-z])(?=.*[A-Z])/.test(value)
                && /^(?=.*\d)/.test(value))
        }
        if (isPassValid) {
            setFormData({...formData, [e.target.name]: e.target.value});
        }
    }


    const hanldeOnSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
            const res = await fetch(`https://health4all-backend.onrender.com/api/v1/user/signup`, {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formData)
            });
            const data = await res.json()
           
            if(!res.ok){
                throw new Error(data.message)
            }
    
            setLoading(false)
            toast.success(data.message)
            navigate('/')
        }
        
        catch(err){
            toast.error(err.message)
            setLoading(false)
        }
    
    };
    

    return (
        <form className="sign-up-form" onSubmit={hanldeOnSubmit}>
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
                <span className="fIcon mt-3 ml-2"><FaUser /></span>
                <input placeholder=" Full Name" 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={hanldeOnChange} 
                required/>
            </div>

            <div className="input-field">
                <span className="fIcon mt-3 ml-2"><FaEnvelope /></span>
                <input placeholder="Email" 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={hanldeOnChange} 
                required/>
            </div>

            <div className="input-field">
                <span className="fIcon mt-3 ml-2"><FaLock /></span>
                <input 
                type="password" 
                name="password" 
                value={formData.password}
                placeholder="password" 
                onChange={hanldeOnChange}
                required/>
            </div>

            <div className=" flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
           Gender 
           <select
    name="gender"
    value={formData.gender}
    onChange={hanldeOnChange}
    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none text-[#7255f7]">
    <option value="Male">male</option>
    <option value="Female">female</option>
    <option value="Others">others</option>
</select>

</label>
</div>
<div className="mb-0 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
           Are you a: 
           <select
    name="role"
    value={formData.role}
    onChange={hanldeOnChange}
    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none text-[#7255f7]">
    <option value="patient">patient</option>
    <option value="doctor">doctor</option>
</select>

</label>
</div>

            <button type="Submit"
                className="btn btn-primary btn-block mt-2 iBtn"
                disabled={loading || !passwordValidation.carLength || !passwordValidation.numeric || !passwordValidation.upperLowerCase || !passwordValidation.specailChar || !emailError.emailError}
                >
             {loading ? <HashLoader size={35} color='#ffffff' />: "Sign Up"} 
             </button>

            <div className="password-validatity mx-auto mt-5 ">
                <div style={emailError.emailError ? { color: "green" } : { color: "red" }} className='flex '>
                   <p className='mb-2 mx-2'>{emailValidation.specailChar ? <FaCheck /> : <FaTimes />} </p> 
                   <p className='mt-2'>Must Have Valid Email.</p>
                </div>

                <div style={passwordValidation.carLength ? { color: "green" } : { color: "red" }} className='flex mt-1'>
                    <p className='mb-2 mx-2'>{passwordValidation.carLength ? <FaCheck /> : <FaTimes />}</p>
                    <p className='mt-2'> Password Must Have atlast 8 character.</p>
                </div>

                <div style={passwordValidation.specailChar ? { color: "green" } : { color: "red" }} className='flex mt-1'>
                    <p className='mb-2 mx-2'>{passwordValidation.specailChar ? <FaCheck /> : <FaTimes />}</p>
                    <p className='mt-2'> Password Must Have a special cracter.</p>
                </div>

                <div style={passwordValidation.upperLowerCase ? { color: "green" } : { color: "red" }} className='flex mt-1'>
                    <p className='mb-2 mx-2'>{passwordValidation.upperLowerCase ? <FaCheck /> : <FaTimes />}</p>
                    <p className='mt-2'>Password Must Have uppercase and lower case.</p>
                </div>

                <div style={passwordValidation.numeric ? { color: "green" } : { color: "red" }} className='flex mt-1'>
                   <p className='mb-2 mx-2'>{passwordValidation.numeric ? <FaCheck /> : <FaTimes />}</p>
                    <p className='mt-2'>Password Must Have Number.</p>
                </div>
            </div>

    
        </form>

    );
};

export default SignUp;

