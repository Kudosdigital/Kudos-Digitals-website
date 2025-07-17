import React from 'react'

const Perks = ({icon, header, content}) => {
  return (
    <div className='flex flex-col justify-center items-center '>
        {icon}
      <h3 className='underline text-[32px] font-[700]'>{header}</h3>
      <p className='text-center w-[60%] text-[24px] font-[400]'>{content}</p>
    </div>
  )
}

export default Perks
