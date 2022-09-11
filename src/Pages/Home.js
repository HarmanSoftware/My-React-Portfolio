import React from 'react'
import Typewriter from 'typewriter-effect';

import HM from '../Assets/Images/HM.jpg'
export default function Home() {

    return (
    <>
        <div className='container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mt-12 sm:scale-100'>
        <div>
        <img className='rounded-l-lg hover:rounded-lg hover:scale-105 ease-in-out duration-500 sm:scale-100 sm:rounded-none' src={HM} alt='My personal img'/>
        </div> 
        <div className='grid grid-cold-1 bg-lightmauve rounded-r-lg' id="type-writer-div">
        <div className='font-bold leading-relaxed rounded-r-lg p-12'> 
        <div className='p-24 -mx-12 -mb-12 text-4xl'>
        <Typewriter
  options={{
      strings: ['Hi There,', 'I\'m Harman Muhammad', 'I\'m Web Developer.'],
      autoStart: true,
      loop: true,
      deleteSpeed:(50)
    }}
/>
    </div>
    </div>      
      <div className='mx-auto'>
       <div>
        <a href='https://github.com/HarmanSoftware' target='_blank' rel="noreferrer">
        <button className='bg-soft-purple hover:bg-[#171515] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="github-btn">GitHub</button>
        </a>
       </div>
       <div>
        <a href='https://www.linkedin.com/in/harmanmuhammad/' target='_blank' rel="noreferrer">            
        <button className='bg-soft-purple hover:bg-[#0A66C2] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="linkedin-btn">LinkedIn</button>
        </a>
        </div>
       <div>
        <a href='https://www.instagram.com/harmanmuhammad99/' target='_blank' rel="noreferrer">
        <button className='bg-soft-purple hover:bg-[#D23A6F] hover:scale-105 ease-in-out duration-500 text-white lg:text-xl sm:text-lg font-medium w-72 h-16 rounded-lg m-2' id="instagram-btn">Instagram</button>
        </a>
       </div>
      </div>
        </div>      
       </div>
       
       <div className='bg-mauve mt-10 pt-4 pb-12' id="aboutme-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
       <h2 className='container mx-auto text-center font-semibold text-3xl mb-4 mt-4'>About Me</h2>
       <div id="aboutme-txt-div" className='container mx-auto p-10 bg-soft-purple text-white hover:bg-purple rounded-lg drop-shadow-md'>
         Self-motivated, optimistic, responsible person and Software engineer, I have experience in freelancing project for different conmany and agencies, Participating in React JS Bootcamp at We-code - Rwanga foundation, +3 years of experience helping with IT issues, Speak Kurdish & English languages.
       </div>
       </div>
       </div>

       <div className='bg-mauve mt-14 pt-4 pb-12' id="webskills-div">
       <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'> Web Skills</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4 '>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-1">HTML 5 / CSS 3 / JS</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-2">Bootsrap 5 / Tailwind CSS</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-3">React JS</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-4">Git / GitHub</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-5">Figma</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
         <div className='text-lg bg-purple text-white hover:bg-soft-purple p-4 rounded-md drop-shadow-sm' id="web-skill-6"> Adobe Photoshop</div>
      </div>
       </div>       
      </div>
        </div>

      <div className='bg-mauve mt-14 mb-12 pt-4 pb-12' id="personalskills-div">
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
      <h2 className='container mx-auto text-center font-semibold text-3xl mt-6'> Personal Skills</h2>
      <div className='container mx-auto rounded-lg text-center font-normal grid lg:grid-cols-3 sm:grid-cols-2 gap-4 px-4 my-4'>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple text-white p-4 rounded-md' id="personal-skill-1">Team Work</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-2">Problem-Solving</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-3">Optimistic</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-4">Flexibility</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
          <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-5">Oral and Written communications</div>
      </div>
      <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
         <div className='text-lg bg-purple hover:bg-soft-purple p-4 text-white rounded-md' id="personal-skill-6"> Self-confidence</div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}
