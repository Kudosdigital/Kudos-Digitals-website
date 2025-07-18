import React from 'react'
import Navbar from "../components/Navbar";
import joinUs from "../assets/Frame 1686560647.png";
import backgroundImage from "../assets/image 3.png";
import Perks from '../components/Perks';
import { DollarSignIcon } from 'lucide-react';
import JobBar from '../components/JobBar';
import FooterNew from '../components/FooterNew';
import { jobApplication } from '../components/Jobdata';

const JoinUs = () => {






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
         <div className='bg-[#001515]  flex flex-col justify-center items-center px-5 md:px-14 py-20'>
            <h2 className='md:text-6xl text-4xl md:text-center font-[800]'>
                Grow Your Career with Kudos Digitals
            </h2>
            <p className='md:text-2xl text-lg  font-[600] md:w-[80%] mt-5 md:text-center'>
                We’re always looking for passionate and talented individuals to join our remote first team
            </p>
            <img
                src={joinUs}
                alt={`join us logo`}
                className="my-28 object-contain"
            />
            <h3 className='text-3xl md:text-4xl text-center font-[700]'>
                Perks of Working with us
            </h3>
         
         </div>
       </div>
        <div className='grid grid-cols-1 md:grid-cols-2   gap-y-20 pb-10 pt-5 text-[#AAD468]'>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Health and Well Being'} content={'HMO, Paid time off work up to 14 days, Gadget insurance.'}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Financial'} content={'Competitive salary, Stock options, Performance Bonuses, Salary Advance, Rent loans.'}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Work-Life Integration '} content={'Flexible workstyles including hybrid and remote. '}/>
            </div>
            <div>
                <Perks icon={<DollarSignIcon/>} header={'Professional Development'} content={'Trainings and opportunities for skill development'}/>
            </div>
        </div>

        <div >
            <h2 className=' text-3xl md:text-5xl font-medium text-center py-20'>
                Current Job opportunities
            </h2>
           <div className='pb-10'>
                 {
                jobApplication.map((title) => {
                    return (
                        <JobBar  key={title.id} title={title.title} linkId={`/joinUs/${title.id}`}/>
                    )
                })
            }
           </div>
        </div>


        <div className="flex lg:px-20 px-3 py-7 mt-5 lg:text-xl md:text-sm text-[10px] font-medium justify-between text-[#001515] bg-[#AAD468] items-center">
                <span>UI Design</span>
                <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
                <span>Event Branding</span>
                <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
                <span>Brand Identity</span>
                <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
                <span>Website Design</span>
                <span className="w-3 h-3 rounded-full bg-[#F9F871]"></span>
                <span>Flyers & Banner Design</span>
        </div>

        <div>
            <FooterNew/>
        </div>

    </div>
  )
}

export default JoinUs
