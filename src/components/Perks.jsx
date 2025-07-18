import React from 'react'

const Perks = ({icon, header, content}) => {
  return (
    <div className='flex flex-col justify-center items-center '>
        {icon}
      <h3 className='underline text-2xl md:text-3xl font-[700] mt-2'>{header}</h3>
      <p className='text-center w-[60%] text-xl md:text-2xl mt-5 font-[400]'>{content}</p>
    </div>
  )
}

export default Perks
