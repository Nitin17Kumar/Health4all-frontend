import React, {  useContext } from 'react';
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Spinner from '../../components/Spinner/Spinner';

const SignIn = () => {

     const navigate = useNavigate();
     const {loading}=useContext(AuthContext);
     const {setToken, setLoading} = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
        const handleInputChange = e => {
        setFormData({...formData, [e.target.name] : e.target.value} );
}
const hanldeOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await fetch(`https://health4all-backend.onrender.com/api/v1/user/login`, {
            method:'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body:JSON.stringify(formData)
		});
		const result = await res.json()
       
		if(!res.ok){
			throw new Error(result.message)
		}

		setLoading(false)
        localStorage.setItem("authToken",result.userObject.token);
        localStorage.setItem("userId",result.userObject._id );
        localStorage.setItem("name",result.userObject.name);
        localStorage.setItem("role",result.userObject.role);
        setToken(localStorage.getItem("authToken"));
        toast.success(result.message)
		navigate('/')
	}
    
    catch(err){
		toast.error(err.message)
		setLoading(false)
	}

};
    return (
        <>
        {loading ? (<Spinner/>): (
        <form className="sign-in-form" onSubmit={hanldeOnSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
                <span className="fIcon mt-3 ml-2"><FaEnvelope /></span>
                <input placeholder="Enter Your Email" type="email" name="email" value={formData.email}
                onChange={handleInputChange} required/>
            </div>

            <div className="input-field">
                <span className="fIcon mt-3 ml-2"><FaLock /></span>
                <input type="password" placeholder="Enter Your Password" name="password" value={formData.password}
                onChange={handleInputChange} required/>
            </div>
        
            <button className="iBtn" type="submit" value="sign In" >Sign In

            </button>
        </form>
        )}
        </>
    );
};

export default SignIn;