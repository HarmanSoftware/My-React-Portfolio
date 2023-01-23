import React from 'react'
import StrongZeal from '../Assets/Images/StrongZeal.png'
import HiMarketing from '../Assets/Images/HiMarketing.png'
import Rwanga from '../Assets/Images/Rwanga.jpg'
import RWDCertification from '../Assets/Images/RWD.PNG'
import AdobePhotoshop from '../Assets/Images/AdobePhotoshop.PNG'
export default function About() {
  return (
    <>
     <h2 className='container mx-auto bg-purple text-4xl text-white text-center font-medium py-3 mt-16 mb-6 rounded-lg' id='project-heading'>Projects</h2>
     <div className='container mx-auto p-8 mb-6 rounded-lg'>
     <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-6 lg:h-96 sm:h-48'>
      <a href='https://himarketing.agency/' target="_blank" rel="noreferrer">
        <img className='h-96 scale-100 hover:scale-105 ease-in-out duration-500 rounded-lg drop-shadow-lg cursor-pointer' src={StrongZeal} alt="Strong Zeal website img"/>
      </a>
      <a href='https://strong-zeal.com/' target="_blank" rel="noreferrer">
      <img className='h-96 scale-100 hover:scale-105 ease-in-out duration-500 rounded-lg drop-shadow-lg cursor-pointer'  src={HiMarketing}  alt="RWD Certification img"/>
      </a>
     </div>
     </div>

     <h2 className='container mx-auto bg-purple text-4xl text-white text-center font-medium py-3 mt-16 mb-6 rounded-lg' id='certification-heading'>Cirtifications</h2>
     <div className='container mx-auto p-8 mb-6 rounded-lg'>
     <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8'>
      <div className='drop-shadow-lg scale-100 hover:scale-105 ease-in-out duration-500'>
        <img className='rounded-lg' src={RWDCertification} alt="RWD Certification img"/>
      </div>
      <div className='drop-shadow-lg scale-100 hover:scale-105 ease-in-out duration-500'>
      <img className='rounded-lg' src={AdobePhotoshop} alt="Photoshop Certification img"/>
      </div>
      <div className='drop-shadow-lg scale-100 hover:scale-105 ease-in-out duration-500'>
      <img className='rounded-lg' src={Rwanga} alt="Rwanga Certification img"/>
      </div>
     </div>
     </div>
    </>
  )
}
