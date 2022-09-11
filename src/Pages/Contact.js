import React, { useRef } from 'react';
import '../Assets/DarkMode.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import Email from '../Assets/Images/Emails.png'
import Call from '../Assets/Images/Call.png'
import ContactMe from '../Assets/Images/ContactMe.png'
import Mail from '../Assets/Images/Send.png'

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5cv62hq', 'template_dy3walo', form.current, 'UBuztRbErCqTj-Wvv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
       .required('Full name required')
       .max(30, 'Fullname must be 30 characters or less')
       .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      email: Yup.string()
       .email('Invalid email address')
       .required('Required'),
       phoneNumber: Yup.number()
       .typeError("That doesn't look like a phone number")
       .positive("A phone number can't start with a minus")
       .integer("A phone number can't include a decimal point")
       .min(8)
       .required('A phone number is required'),
       message:Yup.string()
       .required('Messege is required')
       .max(10,'Messege must be 150 or less chars')
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className='container mx-auto'>
      <div className='container mx-auto grid lg:grid-cols-2 sm:grid-cols-1 mb-8 mt-8'>
        <div className='bg-soft-purple my-4 lg:rounded-l-lg' id="contact-us">
<form className='p-4' ref={form} onSubmit={sendEmail}>  
            <div className='text-center font-medium text-4xl text-white py-3'>Contact Me</div>
            <div className='text-center font-medium text-2xl text-white py-3'> <span className='text-red-500'>*</span> Indicates Required Fields</div>
<div class="relative z-0 mb-6 w-full group py-1">
      <input type="text" name="name" id="name"
       {...formik.getFieldProps('fullName')}
      className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required=""/>
      <label htmlFor="name" className="peer-focus:font-medium absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Full name</label>
      {formik.touched.fullName && formik.errors.fullName ?
      (<div className='text-white py-2 text-center'>{formik.errors.fullName}</div> ) : null}
 
  </div>
  <div class="relative z-0 mb-6 w-full group py-1">
      <input type="email" name="floating_email" id="floating_email"
         {...formik.getFieldProps('email')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required=""/>
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Email address</label>
      {formik.touched.email && formik.errors.email ?
      (<div className='text-white py-2 text-center'>{formik.errors.email}</div> ) : null}
  </div>
  <div class="relative z-0 mb-6 w-full group py-1">
      <input type="tel" name="phone_number" id="phone_number"
      {...formik.getFieldProps('phoneNumber')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" "/>
      <label htmlFor="phone_number" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (Optional)</label>
      {formik.touched.phoneNumber && formik.errors.phoneNumber ?
      (<div className='text-white py-2 text-center'>{formik.errors.phoneNumber}</div> ) : null}
  </div>  
  <div class="relative z-0 mb-6 w-full group py-1">
      <textarea type="text" name="text-area" id="text-area"
      {...formik.getFieldProps('message')} className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-mauve dark:focus:border-lightpurple focus:outline-none focus:ring-0 focus:border-white peer rows=2 cols=50" placeholder=" " required=""/>
      <label htmlFor="text_area" className="peer-focus:font-medium absolute text-lg text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"><span className='text-red-500 font-medium text-xl'>*</span> Message</label>
      {formik.touched.message && formik.errors.message ?
      (<div className='text-white py-2 text-center'>{formik.errors.message}</div> ) : null}
  </div>  
  
  <button type="submit" id="send-btn" className="flex items-center content-center mx-auto bg-bmauve hover:bg-lightmauve focus:ring-4 focus:outline-none focus:ring-mauve font-medium rounded-lg text-lg lg:w-26 lg:h-14 md:w-32 md:h-12 sm:w-18 sm:h-12 mt-16 px-4 py-2 text-center dark:bg-mauve dark:hover:bg-lightpurple dark:focus:ring-mauve hover:scale-110 ease-in-out duration-500">
  <img src={Mail} className='w-8 h-8 mx-1' alt='Submit icon img'/>
  Send</button>
</form>
       
  
<div className='flex justify-evenly px-16 py-12 scale-100'>         
         </div>     
        </div>
        <div className='bg-lightpurple p-6 lg:rounded-lg' id='contact-info'>            
         <div className='text-center text-2xl font-medium p-1'></div>
         <div className='text-center'>
          <img src={ContactMe} className='w-100 h-100 hover:scale-105 ease-in-out duration-500' alt='Contact me img'/>
         </div>

         <div className='py-16'>
         <div id="my-contact-infos" className='flex items-center font-medium py-2 my-2 text-xl rounded-lg bg-white hover:bg-mauve shadow hover:shadow-md hover:scale-105 ease-in-out duration-500'>
          <img src={Call} className='w-8 h-8 mx-2' alt='Call icon img'/>         
         <div className='font-medium px-12'>
         +(964) 751 046 1213
         </div>
         </div>

         <div id="my-contact-infos" className='flex items-center font-medium py-2 my-2 mt-4 text-xl rounded-lg bg-white hover:bg-mauve shadow hover:shadow-md hover:scale-105 ease-in-out duration-500'>
          <img src={Email} className='w-8 h-8 mx-2' alt='Email icon img'/>         
         <div className='font-medium px-12'>
         Herman.muhemed@gmail.com
         </div>
         </div> 
         </div>
      </div>
         </div>
    </div>   
  )
}
