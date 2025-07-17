import React from 'react'
import { Link } from 'react-router-dom'

const JobBar = ({title, linkId}) => {
  return (
    <div className='bg-[#FEFEFE99] h-30 mx-20 rounded-xl flex justify-between px-10 py-10 my-5'>
      <div>
        <h2 className='text-black text-2xl font-medium underline'>{title}</h2>
        <p className='text-[#494949] text-lg font-medium'>Remote/Full Time</p>
      </div>
      <Link to={linkId}>
        <div className='px-6 py-2 rounded-lg bg-[#ABD468] text-black font-semibold transition hover:bg-[#c3e27c]'>
            Apply Now
        </div>
      </Link>
    </div>
  )
}

export default JobBar
