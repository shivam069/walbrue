import React from 'react'
import l1 from '../assets/1l.png'
import l2 from '../assets/2l.png'
import l5 from '../assets/5l.png'
import ml500 from '../assets/500ml.png'
import l20 from '../assets/20l.png'
import {motion} from 'framer-motion'

function Products() {
  return (
    <div id='Products' className='py-8'>
        <h1 className="text-center font-thin text-4xl">Products</h1>
        <motion.div className='width-screen flex justify-center items-end flex-wrap'
        initial={{ x:'50vw' }}
        whileInView={{ x: 0 }}
        transition={{ duration:1, type:"tween",}}
        viewport={{ once: true }}>
        <div><img src={ml500} style={{height:100}} alt='products'/><p>250ml</p></div>
        <div><img src={ml500} style={{height:120}} alt='products'/><p>500ml</p></div>
        <div><img src={l1} style={{height:150}} alt='products'/><p></p>1 litre</div>
        <div><img src={l2} style={{height:180}} alt='products'/><p></p>2 litre</div>
        <div><img src={l5} style={{height:180}} alt='products'/><p></p>5 litre</div>
        <div><img src={l20} style={{height:180, width:200}} alt='products'/><p>20 litre</p></div>
        </motion.div>
    </div>
  )
}

export default Products