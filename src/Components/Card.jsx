import React from 'react'

const Card = (item) => {
  const {name, age, image} = item
  return (
    <div>
      <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-sky-200'>
          <img className='h-full w-full object-cover' src={image} alt='' />
        </div>
        <div className='w-full p-3'>
          <h3 className='text-xl font-semibold'>name :{name}</h3>
          <h5 className='text-xs'> age :{age}</h5>
          <button onClick={()=> {alert("you can't send request 🙂")}} className='mt-4 px-3 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>
            Add Friend
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
