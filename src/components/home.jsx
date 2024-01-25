import React from 'react'
import background from '../assets/home.svg'
import bottles from '../assets/GroupBottles.png'
import { motion } from 'framer-motion'
import nnew from '../assets/new.png'

function Home() {
  function handleclick(){
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    
    <div id='Home' >
    <div className="img-container">
      <img src={background}/>
    </div>
    <div className='hero  flex justify-center md:justify-around items-center flex-wrap'>
      <div className='slogan font-normal text-white text-center md:text-left md:pl-6 px-4 leading-7 grow-0' style={{flexBasis:'440px'}}>
        <h1 id="head" className='text-4xl font-thin py-2'>NOURISH WITH EVERY SIP</h1>
        <p className='text-lg'>At Walbrue, our unwavering dedication to our consumers takes precedence, as we consistently thrive to meet their hydration requirements with excellence. The embodiment of this dedication is Agua De Fonte  our premium bottled Natural Mineral water. It stands as a trusted choice for safe and refreshing 	drinking water, meticulously packaged in cutting edge bottling facilities.</p>
        <button onClick={handleclick} className="bg-emerald-400 hover:bg-emerald-500 text-white font-thin py-2 px-8 mt-4 md:ml-4 rounded-md">
  Contact
</button>
      </div>
      <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      >
      <img id='bottles' className='ml-auto drop-shadow-xl' src={bottles} alt='bottles of different sizes'/>
      </motion.div>
      </div>
      </div>
      </>
  )
}

export default Home
