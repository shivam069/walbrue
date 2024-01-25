import React from 'react'
import { FaNewspaper } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";

function Card({Title, Para, About=true}) {
  return (
    <div className='flex-col items-start max-w-xs rounded-lg p-4'>
       <h2 className='font-semibold text-2xl text-left'>
       {About?<FaNewspaper style={{color:"mediumturquoise", fontSize:"2em"}} className='inline-block pr-4'/>:
       <FaRegQuestionCircle style={{color:"mediumturquoise", fontSize:"2em"}} className='inline-block pr-4'/>}{Title}</h2>
       <p className='text-left text-gray-500'>{Para}</p>


    </div>
  )
}

export default Card