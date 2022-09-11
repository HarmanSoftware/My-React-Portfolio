import React from 'react'
export default function Experience() {
  return (
    <>
    <h2 className='container bg-soft-purple text-white mx-auto text-4xl font-medium text-center mt-16 mb-6 py-3 rounded-lg' id="education-haeding">Education</h2>    
    <div className='scale-95 hover:scale-100 ease-in-out duration-500'>
    <div className='container mx-auto grid grid-cols-2 py-4 bg-mauve rounded-t-lg' id="education-text">
   <div className='text-2xl font-medium px-4'>Soran University</div>
   <div className='text-2xl font-medium px-4'>2017 / 2018</div>
    </div>
     <ul className='container mx-auto bg-lightmauve rounded-b-lg mb-4 list-disc px-14 py-2 text-xl' id="education-lists">
      <li>Top 1st student over my department - Soran uni / Computer science.</li>
     </ul>   
     
     <div className='container mx-auto grid grid-cols-2 py-4 bg-mauve rounded-t-lg' id="education-text">
   <div className='text-2xl font-medium px-4'>Sallahaddin University</div>
   <div className='text-2xl font-medium px-4'>2018 / 2022</div>
    </div>
     <ul className='container mx-auto bg-lightmauve rounded-b-lg mb-4 list-disc px-14 py-2 text-xl' id="education-lists">
      <li>Graduated in Sallahaddin university / College of Enginnering / Software Engineering</li>
     </ul>     
     </div>
     

   <h2 className='container bg-soft-purple text-white mx-auto text-4xl font-medium text-center mt-12 mb-6 py-3 rounded-lg' id="education-haeding">Internship</h2>
   <div className='drop-shadow-md scale-95 hover:scale-100 ease-in-out duration-500'>
   <div className='container mx-auto grid grid-cols-2 py-4 bg-mauve rounded-t-lg' id="education-text">
   <div className='text-2xl font-medium px-4' id="education-text">Bekhma Company</div>
   <div className='text-2xl font-medium px-4' id="education-text">June 2020 / Sep 2020</div>
    </div>
     <ul className='container mx-auto bg-lightmauve rounded-b-lg mb-4 list-disc px-14 py-2 text-xl' id="education-lists">
      <li>Social Media Disigner</li>
      <li>Social Media Manager</li>
      <li>Team Working</li>
     </ul>
     </div>

     <h2 className='container bg-soft-purple text-white mx-auto text-4xl font-medium text-center mt-12 mb-6 py-3 rounded-lg' id="education-haeding">Courses</h2>
     <div className='scale-95 hover:scale-100 ease-in-out duration-500 z-50'>
   <div className='container mx-auto grid grid-cols-2 py-4 bg-mauve rounded-t-lg' id="education-text">
   <div className='text-2xl font-medium px-4'>Rwanga Foundation</div>
   <div className='text-2xl font-medium px-4'>June 2022 / Sep 2022</div>
    </div>
     <ul className='container mx-auto bg-lightmauve rounded-b-lg mb-4 list-disc px-14 py-2 text-xl' id="education-lists">
      <p className='sm:text-lg font-medium'>React Development Bootcamp by WeCode - Rwanga Foundation , I learned the following technologies:</p>
      <li>HTML 5</li>
      <li>CSS 3</li>
      <li>JavaScript ES6</li>
      <li>Bootsrap 5 </li>
      <li>Tailwind CSS</li>
      <li>React</li>
      <li>Redux</li>
      <li>Learned to use +20 NPM Libraries</li>
     </ul>     
     </div>
    </>
  )
}
