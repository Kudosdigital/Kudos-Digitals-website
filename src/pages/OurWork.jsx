import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FooterNew from '../components/FooterNew';
import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import three from '../assets/3.jpg'
import four from '../assets/4.jpg'
import five from '../assets/5.jpg'
import six from '../assets/6.jpg'
import seven from '../assets/7.jpg'
import eight from '../assets/8.jpg'
import nine from '../assets/9.jpg'
import ten from '../assets/10.jpg'
import eleven from '../assets/11.jpg'
import twelve from '../assets/12.jpg'
import { Link } from 'react-router';

export const users = [
  { id: Math.random().toString(36).slice(2, 10),
     imageUrl: one, category: 'Brand Identity', title: 'Alpha Seven', preview: 'We helped Alpha Seven Solutions elevate their corporate identity with a bold, professional roll-up banner. Designed for clarity and visual impact at corporate events.' },
  
  { id: Math.random().toString(36).slice(2, 10), 
    imageUrl: two, 
    category: 'Event Branding', 
    imageUrl1: eight, 
    imageUrl2: nine, 
    imageUrl3: ten, 
    about: 'The Fireside Chat hosted by Covenant University was envisioned as a thought-leadership event bringing together influential speakers, students, and young entrepreneurs for meaningful conversations about innovation, purpose, and digital transformation. The objective was to create an inspiring yet formal atmosphere that resonated with the modern academic and corporate audience.',
    client: '“The branding for our Fireside Chat was nothing short of exceptional. Kudos Digitals truly captured the essence of what we envisioned—elegant, thought-provoking, and impactful. The design brought a new level of professionalism and prestige to our event, making it feel like a world-class experience for both speakers and attendees. We received overwhelming praise across all platforms, and the visual identity played a huge role in driving early RSVPs and engagement. We’re proud to have partnered with such a talented and detail-driven team.”',
    clientInfo: 'Fireside Chat Organizing Committee',
    title: 'Covenant University', preview: "We crafted bold and modern event branding for Covenant University's Fireside Chat, capturing attention and reflecting the prestige of its speakers and organizers." },
  { id: Math.random().toString(36).slice(2, 10), imageUrl: three, category: 'Brand Identity', title: 'TYUL Global Trades', preview: 'We developed a bold and professional brand identity for TYUL Global Trades, capturing their global vision and commitment to value delivery.' },
  { id: Math.random().toString(36).slice(2, 10), 
    about: 'A Closed Symposium with Cynthia, Amanda & Essien Etuk. We created a dynamic visual identity and promotional materials to launch a symposium focused on building businesses in a challenging economy.',
    client: "The Kudos team completely understood our vision, creating a design that was professional, bold, and perfectly captured the essence of 'Building in a Tough Economic Climate.' The final art card was instrumental in attracting the right audience and truly elevated our event's brand. We are thoroughly impressed with their creativity and professionalism.",
    clientInfo: 'Cynthia Chisom',
    imageUrl: four, category: 'Event Branding', 
    imageUrl1: seven, category: 'Event Branding', 
    imageUrl2: eleven, category: 'Event Branding', 
    imageUrl3: twelve, category: 'Event Branding', 
    title: 'CAE', preview: 'We created a dynamic visual identity and promotional materials to launch a symposium focused on building businesses in a challenging economy.' },
  { id: Math.random().toString(36).slice(2, 10), imageUrl: five, category: 'Event Branding', title: 'Founders Friday', preview: 'An exclusive event with Founders Friday. We crafted a sophisticated and clean promotional art card to announce a special dinner for founders, featuring an influential guest speaker.' },
  { id: Math.random().toString(36).slice(2, 10), imageUrl: six, category: 'Graphics Design', title: 'Nigeria British University', preview: "We created a vibrant and engaging promotional art card to attract prospective students and highlight the university's world-class education." },
];

const OurWork = () => {



  const categories = ['All', 'Brand Identity', 'Event Branding', 'Graphics Design', 'Website Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredUsers =
    selectedCategory === 'All'
      ? users
      : users.filter(user =>
          user.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div>
      <Navbar />
      <div className='py-20'>
        <h2 className='text-[#001C1C] text-center text-8xl font-bold'>
          Our Work.<span className='text-[#AAD468]'> Our Impact</span>
        </h2>
        <p className='text-center text-2xl mt-4 font-[500] text-[#656565]'>
          Explore our diverse portfolio of successful projects that drive results.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className='py-10 flex flex-wrap gap-4 justify-center'>
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full  ${
              selectedCategory === category
                ? 'bg-[#AAD468] text-black'
                : 'bg-[#E5F2D0] text-[#535353] '
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Projects */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-28 mt-10 my-10 relative'>
        {filteredUsers.map(user => (
          <div key={user.id} className='rounded-xl shadow-lg shadow-[#4d4d4d] h-[450px] bg-[#001C1C]'>
            <img src={user.imageUrl} alt={`${user.title} image`} className='rounded-t-xl h-[45%] w-full'/>
           <div className='px-8 flex flex-col justify-between h-[55%] py-3'>
                <div>
                    <p className='text-sm text-[#ABABAB]'>{user.category}</p>
                    <h3 className='text-2xl font-semibold text-[#AAD468]'>{user.title}</h3>
                    <p className='mt-2 text-[#ABABAB] text-[14px]'>{user.preview}</p>
                </div>
                <div className='flex justify-center'>
                  <Link to={`/ourWork/${user.id}`}>
                    <button className=' text center bg-[#fff] py-2 px-5 rounded-3xl hover:cursor-pointer ' >
                        View Project
                    </button>
                  </Link>
                </div>
           </div>
          </div>
        ))}
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

        <div className='bg-[#001C1C] text-[#F9F871]'>
            <FooterNew/>
        </div>
    </div>
  );
};

export default OurWork;
