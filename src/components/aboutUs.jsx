import React from 'react'
import Card from './card'
import { motion } from 'framer-motion'

function AboutUs() {
  return (
    < div>
        <h1 id='About' className='text-4xl font-semibold m-4'>About </h1>
        <motion.div className='flex justify-around flex-wrap'
        initial={{ x:'50vw' }}
        whileInView={{ x: 0 }}
        transition={{ duration:1, type:"tween",}}
        viewport={{ once: true }}>
        <Card Title='About Wall Brew'
          Para='Welcome to wall brew,where purity  meets excellence in every drop. As a dedicated packaged drinking water company based in Goa. As the emerging demands supply water, Wall brew takes immense pride in delivering pristine and refreshing hydration to our local community. Hence we are committed to provide and maintain the highest standards of quality, considering this our water undergoes rigorous purification processes to ensure unmatched purity and cater to the needs of the people, by considering the importance of health. With a focus on backward integration, we are committed to establishing our own production facilities, that makes us a unique beverage company within our state.'
        /> 
        
        <Card Title='Why Choose Us?'
          Para='As water is the most essential elixir of life, it is difficult to live without it. In the constant demand by the families in search of healthy  water that provides correct minerals and nutrients, Wall brew is the right place where your needs would be met. Our water is palatable and delectable in nature. Our unwavering commitment to purity ensures the highest quality standards. Wall brew is ardent in delivering freshness and reliability in every sip. We are dedicated towards the sustainable management of water resources within the natural ecosystem that is essential for preserving the harmony of nature, safeguarding the environment and promoting the health of society.'
          About={false}

         /> 

         <Card Title='Future Goals'
          Para='Our newly launched mineral water company is dedicated to setting new benchmarks in quality and sustainability. Our future goals include pioneering eco-friendly packaging, responsible in sourcing water and actively contributing towards community development through strategic partnerships. With a commitment to innovation and customer satisfaction we envision in  becoming a leading brand synonymous with premium, ethically sourced mineral water creating a positive impact on both consumers and the environment.'
        />    

        </motion.div>
    </div>
  )
}

export default AboutUs
