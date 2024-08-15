import React from 'react'
import aboutImg from '../../../assets/img/about.jpg'
import '../Yoga.css'

const AboutUs = () => {
    return (
        <>
        <h3 className='text-center mt-8 font-semibold text-gray-500'>ABOUT</h3>
            <h1 className='text-2xl text-center font-semibold text-green-800' >Health4All Yoga & Wellness Program</h1>
<div >
            <div className='container mx-auto mt-5'>
                <div className='flex flex-col md:flex-row'>
                        <div className='mt-5 w-[100%]  mr-8 '>
                            <img src={aboutImg} className='h-[350px]' alt="" />
                        </div>
                        <div className='mt-5 text-lg'>
                            <p>
                                Welcome to <span className='text-green-800 font-medium'>Health4All !</span> We &apos;re more than just a yoga class; we&apos;re a community dedicated to helping you find your inner peace and unlock your full potential. Since our doors opened in 2020, we&apos;ve been passionate about guiding individuals on their unique yoga journeys, regardless of experience or background.
                            </p>

                            <h4 className='text-xl mt-3 text-green-800 font-semibold'>Our Journey:</h4><hr className='line' />
                            <p className='mt-2'>
                                Founded in 2020, <span>YogaSanskriti</span> was born from a desire to create a welcoming space where everyone could explore the transformative power of yoga. We believe that yoga is for everyone, and we strive to offer a diverse range of classes, workshops, and events to cater to all levels and interests.
                            </p>
                    </div>
                </div>
                </div>

                <div className='text-lg mt-4 container mx-auto mt-4'>
                    <h4 className='text-xl mt-3 text-green-800 font-semibold'>What Makes Us Different:</h4><hr className='line mb-2' />
                    <p>
                        <ul>
                            <li>
                                <span className='text-green-800 font-medium'>Experienced and passionate instructors:</span> Our team of certified yoga teachers is dedicated to sharing their knowledge and expertise in a supportive and encouraging environment.
                            </li>
                            <li className='mt-2'>
                                <span className='text-green-800 font-medium'>Diverse class offerings:</span> From gentle Hatha to challenging Vinyasa, we offer a variety of classes to suit your needs and preferences. We also have workshops, retreats, and other events to help you deepen your practice.

                            </li>
                            <li className='mt-2'>
                                <span className='text-green-800 font-medium'>More than just physical postures:</span> We understand that yoga is about more than just physical exercise. We incorporate mindfulness, meditation, and breathwork into our classes to help you connect with your inner self and find greater peace and well-being.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs
