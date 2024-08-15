import React from 'react'
import maaKrupaLogo from '../../../assets/img/sponsors/maaKrupa.png'
import physioBrotherLogo from '../../../assets/img/sponsors/thePhysioBrothers.png'
import fitIndiaLogo from '../../../assets/img/sponsors/fit-india-logo.png'
import indianFederationLogo from '../../../assets/img/sponsors/indian-federation-of-yoga.png'
import GujYogBoardLogo from '../../../assets/img/sponsors/guj-yo-borad-logo.png'
import MINAyushLogo from '../../../assets/img/sponsors/Ministry-of-AYUSH-logo-750x400.jpg'
import WHOLogo from '../../../assets/img/sponsors/WHO-Logo.png'


const Partner = () => {
    return (
        <div className='mt-8'>
            <h1 className='text-2xl text-red-600 font-bold text-center'>Sponsors</h1>

            <div className='container mx-auto flex flex-col md:flex-row justify-center mt-5'>
                <div className=' mx-[100px] '>
                    <a href='/' title='MaaKrupa Hardware & Machine Tools'>
                        <img src={maaKrupaLogo} alt="MaaKrupa Logo" className='img-fluid h-[90px] grayscale hover:grayscale-0' />
                    </a>
                </div>
                <div className=' mx-[100px] md:mx-0'>
                    <a href='/' title='ThePhysioBrothers'>
                        <img src={physioBrotherLogo} alt="ThePhysioBrothers Logo" className='h-[90px] grayscale hover:grayscale-0'/>
                    </a>
                </div>
            </div>

            <h1 className='text-2xl text-red-600 font-bold text-center mt-8'>Inspired By</h1>

            <div className='container md:mx-auto mb-8 mx-[100px]'>
                <div className='container mx-auto flex flex-col md:flex-row justify-evenly mt-5'>
                    <div>
                        <img src={GujYogBoardLogo} alt="Gujarat State Yog Board Logo" title='Gujarat State Yog Board' className=' h-[100px] grayscale hover:grayscale-0' />
                    </div>
                    <div className='brand'>
                        <img src={fitIndiaLogo} alt="Fit India Logo" title='Fit India' className='h-[100px] grayscale hover:grayscale-0'/>
                    </div>
                    <div className='brand'>
                        <img src={indianFederationLogo} alt="Indian Federation Logo" title='Indian Federation of Yoga' className='h-[100px] grayscale hover:grayscale-0'/>
                    </div>
                    <div className='brand'>
                        <img src={MINAyushLogo} alt="Ministry of Ayush Logo" title='Ministry of Ayush' className=' h-[100px] grayscale hover:grayscale-0' />
                    </div>
                    <div className='brand'>
                        <img src={WHOLogo} alt="World Health Organization Logo" title='World Health Organization | WHO' className='h-[100px] grayscale hover:grayscale-0'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner
