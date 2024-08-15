import React, { useState } from 'react';
import Modal from 'react-modal';
import groupYoga from '../../../assets/img/Courses/group-yoga.jpg';
import onlineYoga from '../../../assets/img/Courses/online-yoga.jpg';
import physio from '../../../assets/img/Courses/physio.jpg';
import telerehabilitation from '../../../assets/img/Courses/telerehabilitation.jpg';
import video01 from '../../../assets/video/01.mp4';
import video02 from '../../../assets/video/02.mp4';
import video03 from '../../../assets/video/03.mp4';
import video04 from '../../../assets/video/04.mp4';


import { useNavigate } from 'react-router-dom';
Modal.setAppElement('#root');


const Courses = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
   const navigate = useNavigate();
    const coursesList = [
        {
            id: 101,
            name: 'Group Yoga Training Session',
            profile: groupYoga,
            video:video01,
            data: [
                { _id: 1, title: 'Increased motivation and accountability' },
                { _id: 2, title: 'Improved form and technique' },
                { _id: 3, title: 'Sense of community and belonging' },
                { _id: 4, title: 'Reduced stress and anxiety' },
                { _id: 5, title: 'Increased energy and vitality' },
                { _id: 6, title: 'Greater sense of accomplishment' },
                { _id: 7, title: 'More Fun' },
            ]
        },
        {
            id: 102,
            name: 'Online Yoga Class',
            profile: onlineYoga,
            video:video03,
            data: [
                { _id: 1, title: 'Personalized Training' },
                { _id: 2, title: 'Easy to access' },
                { _id: 3, title: 'Access from anywhere' },
                { _id: 4, title: 'Cheaper than the Market' },
                { _id: 5, title: 'Benefit of Telerehabilitation' },
            ]
        },
        {
            id: 103,
            name: 'Physiotherapy',
            profile: physio,
            video:video02,
            data: [
                { _id: 1, title: 'Get treated by Expert' },
                { _id: 2, title: 'Improve Strength' },
                { _id: 3, title: 'Improve flexibility' },
                { _id: 4, title: 'Improve Balance' },
                { _id: 5, title: 'Improve Co-ordination' },
            ]
        },
        {
            id: 104,
            name: 'Telerehabilitation',
            profile: telerehabilitation,
            video:video04,
            data: [
                { _id: 1, title: 'Get treated by Expert' },
                { _id: 2, title: 'Easy to access' },
                { _id: 3, title: 'Get treated anytime & anywhere' },
                { _id: 4, title: 'Get pre-recorded exercise videos' },
                { _id: 5, title: 'Be a part of fastest growing network' },
            ]
        },
    ];

    const openModal = (course) => {
        setSelectedCourse(course);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedCourse(null);
    };

    return (
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold text-center my-8'>Our Courses</h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {coursesList.map(course => (
                    <div key={course.id} className='bg-gray-50 rounded-lg shadow-xl overflow-hidden cursor-pointer' onClick={() => openModal(course)}>
                        <img src={course.profile} alt={course.name} className='w-full h-48 object-cover' />
                        <div className='p-4'>
                            <h2 className='text-xl font-bold '>{course.name}</h2>
                  
                        </div>
                    </div>
                ))}
            </div>

            {selectedCourse && (
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="flex bg-white p-6 rounded-lg shadow-md w-[800px] mx-auto mt-20 " overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">

                    {/* add the video of each exercise  */}
              <div>     <video width="400"  autoPlay muted loop>
                <source src={selectedCourse.video} type="video/mp4" />
              </video>
              </div> 
<div>
                    <h2 className='text-2xl font-bold mb-4 mx-6'>{selectedCourse.name}</h2>
                    <ul className='mx-6'>
                        {selectedCourse.data.map(item => (
                            <li key={item._id} className='flex items-center mb-2'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 mr-2 text-green-500' viewBox='0 0 20 20' fill='currentColor'>
                                    <path fillRule='evenodd' d='M17.293 5.293a1 1 0 011.414 1.414l-10 10a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L7 14.586l9.293-9.293a1 1 0 011.414 0z' clipRule='evenodd' />
                                </svg>
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                   <div> <button onClick={()=>navigate("/login")} className='mt-4 mx-6 bg-green-700 text-white py-2 px-4 rounded-md'>Let Log in First to Book Online Classes</button>
                   </div> <button onClick={closeModal} className='mt-4 bg-red-700 mx-6 text-white py-2 px-4 rounded-md'>Close</button>
                   </div>
                </Modal>
            )}
        </div>
    );
};

export default Courses;
