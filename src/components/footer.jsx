import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Foter() {
  const year= new Date().getFullYear() 
  return (
    <>
    <div className='waves'></div>
    <div className='bg-cyan-200 text-gray-500 flex flex-col px-20'>
      <div className='col-span-3' >
      <img src={logo} className='w-32 p-4 pl-0'/>
    </div>
    <div className='flex flex-wrap justify-between text-left gap-4'>
    
      <div className='basis-72'>
        <h1>Head Office:</h1>
        <p>AF1-AF5, Campal Trade Center,<br/>
           opp. Taj Vivanta,<br/>
           Santa Inez, Panaji,<br/>
           Goa 403001</p>
      </div>
      <div className='basis-72'>
      <h2>Phone :9823812524</h2>
      <h2>Email :ameysawant@walbrue.com</h2>
      </div>
      <div className='basis-72'>
        <h1>Follow Us:</h1>
        <a><FaInstagram className='inline-block'/> Instagram</a><br/>
        <a><FaFacebook className='inline-block'/> Facebook</a><br/>
        <a><FaXTwitter className='inline-block'/> Twitter</a><br/>
      </div>
      
    </div>
    

    
        
<div>
<footer className=" dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 pb-6 lg:pb-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a className="hover:underline">Wall Brew™</a>. All Rights Reserved.
          </span>
          <div>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://coppercodes.com/" className="hover:underline">Designed by COPPERCODES CONSULTING LLP™</a>
          </span>
          </div>
      </div>
    </div>
</footer>

    </div>
    </div>
    </>
  )
}

export default Foter