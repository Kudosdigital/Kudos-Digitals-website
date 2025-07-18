import { useParams } from "react-router-dom"
import React from 'react'
import Navbar from "../components/Navbar"
import { jobApplication } from "../components/Jobdata"
import { useRef, useState } from "react"
import { Plus } from "lucide-react"
import FooterNew from "../components/FooterNew"
import backgroundImage from "../assets/bg.png";

const JobApplication = () => {


    const [fileName, setFileName] = useState(null)
    const [fileName2, setFileName2] = useState(null)
    const { id  } = useParams()

    const job = jobApplication.find((j) => j.id === id);

  if (!job) {
    return <div className="text-white p-10">Job not found.</div>;
  }

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  
  const inputRef2 = useRef(null);

  const handleClick2 = () => {
    inputRef.current?.click();
  };

  const handleChange2 = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        setFileName2(file.name);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" bg-[#001515] text-[#AAD468] ">
      <div className='bg-[#042727ec]'>
        <Navbar/>
      </div>
    <div className="">
      <div className="lg:px-20 px-5">
        <h2 className="text-center md:text-5xl text-3xl font-bold my-10">Job Application</h2>
        <h2 className="py-5 md:text-4xl text-2xl font-medium">Job Role</h2>
        <p className="md:text-2xl text-lg text-white"> {job.title}</p>
        <h2 className="py-5 md:text-4xl text-2xl  font-medium">Job Description</h2>
        <p className="md:text-2xl text-lg text-white"> {job.description}</p>
        <h2 className="py-5 md:text-4xl text-2xl font-medium">Job Requirements:</h2>
        <p className="md:text-2xl text-lg text-white"> {job.requirement}</p>
      </div>

      <form className="py-10 lg:px-20 px-5">
        <div class="w-full m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
          <label class="text-[#aad468] font-semibold mr-2 text-xl ">Full Name:</label>
          <input type="text" class="bg-transparent text-white outline-none min-w-[60%] " />
        </div>
        <div class="w-full m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
          <label class="text-[#aad468] font-semibold mr-2 text-xl ">Email:</label>
          <input type="text" class="bg-transparent text-white outline-none min-w-[60%] " />
        </div>
        <div class="w-full m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
          <label class="text-[#aad468] font-semibold mr-2 text-xl ">Phone Number:</label>
          <input type="text" class="bg-transparent text-white outline-none  " />
        </div>
        <div class="w-full m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
          <label class="text-[#aad468] font-semibold mr-2 text-xl ">LinkedIn Profile URL(Optional):</label>
          <input type="text" class="bg-transparent text-white outline-none  min-w-[60%]" />
        </div>
        <div class="w-full m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
          <label class="text-[#aad468] font-semibold mr-2 text-xl ">Portfoilio Link:</label>
          <input type="text" class="bg-transparent text-white outline-none min-w-[60%] " />
        </div>
        <div class="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500">
          <div className="flex items-center">
            <label class="text-[#aad468] font-semibold mr-2 text-xl ">Cover Letter (Optional):</label>
            <p className="text-white text-lg">{fileName2}</p>
          </div>
          
        <textarea 
          rows={4}
          className="w-full"
        />
          
        </div>
        
        <div class="w-full flex justify-between m bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 items-center">
          <div className="flex items-center">
            <label class="text-[#aad468] font-semibold mr-2 text-xl ">CV Upload:</label>
            <p className="text-white text-lg">{fileName}</p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="w-[120px] items-center  flex h-[50px] px-5 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner shadow-[#00000040] text-[#001515] text-lg font-medium"
          >
           <Plus />  <p> Upload</p>
          </button>
          <input 
          type="file" 
          ref={inputRef}
          className="hidden"
          onChange={handleChange}/>
        </div>
      
         <div className="flex justify-center mt-20">
          <button
            type="submit"
            className=" h-[50px] px-5 my-20 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner shadow-[#00000040] text-[#001515] text-lg font-medium"
          >
            Submit Application
          </button>
         </div>
      </form>

      <div className="flex justify-center items-center h-96 py-10 flex-col"
      style={{
        backgroundImage: `
          url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        }}>
        <h2 className="md:text-7xl text-4xl text-center my-5 font-medium">Your idea deserves to be heard.</h2>
        <button
            type="button"
            className=" py-5 my-10 px-5 rounded-sm text-2xl border border-[#D0D0D0]/10 bg-[#B3FF3C] shadow-inner shadow-[#00000040] text-[#001515]  font-medium"
        >
          Share your idea
        </button>
      </div>

      <div className="flex lg:px-20 px-3 py-7  lg:text-xl md:text-sm text-[10px] font-medium justify-between text-[#001515] bg-[#AAD468] items-center">
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
    </div>
  )
}

export default JobApplication
