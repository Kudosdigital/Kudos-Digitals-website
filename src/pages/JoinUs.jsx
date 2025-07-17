import React from 'react'
import Navbar from "../components/Navbar";
import joinUs from "../assets/Frame 1686560647.png";
import backgroundImage from "../assets/image 3.png";
import Perks from '../components/Perks';
import { DollarSignIcon } from 'lucide-react';
import JobBar from '../components/JobBar';

const JoinUs = () => {


    const jobApplication = [
        {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'Senior UI/UX Designer'
         },
         {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'Front-end Engineer'
         },
         {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'Back-end Engineer'
         },
         {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'Graphic Designer'
         },
         {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'Software Engineer'
         },
         {
        id:  Math.random().toString(36).slice(2, 10),
        title: 'DevOps'
         },
]



  return (
    <div className='relative min-h-screen text-[#AAD468] bg-[#001515]/95 bg-blend-multiply'
     style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
    >
    <div className="absolute inset-0  text-[#AAD468] z-0 pointer-events-none" >
    </div>
       <div className='relative z-20 '>
         <div className='bg-[#001515ec]'>
            <Navbar/>
         </div>
         <div className='bg-[#001515]  flex flex-col justify-center items-center px-14 py-20'>
            <h2 className='text-[64px] font-[800]'>
                Grow Your Career with Kudos Digitals
            </h2>
            <p className='text-[28px] font-[600] w-[80%] text-center'>
                We’re always looking for passionate and talented individuals to join our remote first team
            </p>
            <img
                src={joinUs}
                alt={`join us logo`}
                className="my-28 object-contain"
            />
            <h3 className='text-[48px] font-[700]'>
                Perks of Working with us
            </h3>
         
         </div>
       </div>
        <div className='grid grid-cols-2 gap-y-20 py-20 text-[#AAD468]'>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Financial'} content={'Competitive salary, Stock options, Performance Bonuses, Salary Advance, Rent loans.'}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Health and Well Being'} content={'HMO, Paid time off work up to 14 days, Gadget insurance.'}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Work-Life Integration '} content={'Flexible workstyles including hybrid and remote. '}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Professional Development'} content={'Trainings and opportunities for skill development'}/>
            </div>
        </div>

        <div >
            <h2 className='text-5xl font-medium text-center py-20'>
                Current Job opportunities
            </h2>
            {
                jobApplication.map((title) => {
                    return (
                        <JobBar  key={title.id} title={title.title} linkId={`/joinUs/${title.id}`}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default JoinUs
