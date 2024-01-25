import React, { useRef, useState } from 'react'
import contactPic from '../assets/contactPic2.jpg'
import emailjs from '@emailjs/browser';
// import toast, { Toaster } from 'react-hot-toast';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactUs() {
  const success = () => toast.success("Message Sent Succesfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const failed=()=>toast.error("Error: Message Not Sent ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",});
 

    
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            success()
        }, (error) => {
            console.log(error.text);
            failed()
        });
        // e.target.reset();
    };
 
    
  return (
    <div id='Contact' className=' flex flex-col items-center justify-center py-8 mt-8  '>
    <h1 className="text-center text-4xl font-light pb-14">Contact Us For Your Requirements</h1>
    <p>Fill the form below and send us your requirements or queries and we will get in touch with you via a phone call</p>
    <div className='flex justify-center items-center '>
      <div>
        <img id='contactPic' src={contactPic}/>
      </div>
        <form ref={form} onSubmit={sendEmail} className="w-full max-w-lg bg-white  rounded-lg p-4 shrink-0">
        <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input className="appearance-none block w-full  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" name='user_name' type="text" placeholder="Name" required />
    
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" name='phone' type="number" placeholder="Phone no." required  minLength={10} maxLength={10} />
    
    </div>
  </div>
  
 <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input className="appearance-none  block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='user_email' type="email" placeholder="Email" required />
    
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" name='address' placeholder="Address" />
    
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <textarea rows={5} cols={80} className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-textbox" name='message' type="text" placeholder="Enter your requirements or queries " size={200} />
    
    </div>
  </div>
<button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded-full"
    >
    Send
</button>
</form>
</div>
<ToastContainer/>
    </div>
  )
}

export default ContactUs