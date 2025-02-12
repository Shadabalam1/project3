import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";


const Card = () => {

const [val, setVal] = useState(false)
const clickk =() => setVal( ()=> !val )  

  return (
    <div  className=' w-full h-screen flex justify-center items-center '>
      
  <div className='relative w-60 h-32 rounded-md flex overflow-hidden '>

   <img className={`shrink-0  ${ val ? '-translate-x-[100%]' : '-translate-x-[0]'} -translate-x-[0%]  w-full h-full object-cover`} src="https://plus.unsplash.com/premium_photo-1739198859134-94d2e0135cc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="" />
    <img className={`shrink-0  ${ val ? '-translate-x-[100%]' : '-translate-x-[0]'} -translate-x-[0%]  w-full h-full object-cover`} src="https://images.unsplash.com/photo-1739361043380-f75ae825aee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" alt="" />

    

    <span onClick={clickk} className='absolute right-2 bottom-2 h-8 w-8 flex justify-center items-center bg-[#dadada8b] rounded-full '>
          <FaArrowRight size="1em" />
        </span>

     </div>
      

    </div>
  )
}

export default Card
