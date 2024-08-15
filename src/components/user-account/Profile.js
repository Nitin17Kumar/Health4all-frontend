import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

const Profile = ({ user }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        bloodType: "",
    });

    const navigate = useNavigate();

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                gender: user.gender,
                bloodType: user.bloodType
            });
        }
    }, [user]);

    return (
        <div className="mt-10">
            <form>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-primaryColor text-lg text-headingColor placeholder:text-gray-400"
                        required
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-primaryColor text-lg text-headingColor placeholder:text-gray-400"
                        readOnly
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-primaryColor text-lg text-headingColor placeholder:text-gray-400"
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="text"
                        placeholder="Blood Type"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleInputChange}
                        className="w-full py-3 border-b border-gray-300 focus:outline-none focus:border-primaryColor text-lg text-headingColor placeholder:text-gray-400"
                        required
                    />
                </div>
                <div className="mb-5 flex items-center justify-between">
                    <label className="text-headingColor font-bold text-lg">
                        Gender:
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="ml-2 text-headingColor font-semibold text-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-primaryColor"
                        >
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>
                <div className="mt-7">
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full bg-blue-600 text-white text-lg py-3 rounded-md flex items-center justify-center"
                    >
                        {loading ? <HashLoader size={25} color="#ffffff" /> : "Update"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
