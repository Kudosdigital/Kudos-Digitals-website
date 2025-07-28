import { useEffect, useRef } from "react";
import {
  PenTool,
  BadgeCheck,
  Layers,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import man_woman from "../../assets/Subtract.png";
import circle from "../../assets/Ellipse 25.png";

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        leftCardRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: leftCardRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        rightImageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rightImageRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 py-20 text-white overflow-hidden"
    >
      {/* Section Title */}
      <div ref={titleRef} className="w-full pb-6 text-center z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          Why <span className="text-[#C6FF7F]">Choose Kudos Digitals?</span>
        </h2>
        <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
          Partner with us for innovation, expertise, and a commitment to your
          success.
        </p>
      </div>

      {/* Floating bubbles with animation */}
      {/* Bubble 1 (largest one) */}
      <img
        src={circle}
        alt="circle"
        className="floating absolute top-[23%] left-[80%] sm:top-[15%] sm:left-[62%] md:top-[16%] md:left-[86%] lg:top-[21%] lg:left-[77%] w-10 sm:w-12 md:w-18 lg:w-20 z-0"
      />

      {/* Bubble 2 (small) */}
      <img
        src={circle}
        alt="circle"
        className="floating absolute top-[25%] left-[16%] sm:top-[48%] sm:left-[54%] md:top-[19%] md:left-[14%] lg:top-[26%] lg:left-[53%] w-4 sm:w-6 md:w-10 lg:w-10 z-0"
      />

      {/* Bubble 3 (medium) */}
      <img
        src={circle}
        alt="circle"
        className="floating absolute top-[24%] left-[23%] sm:top-[46%] sm:left-[55%] md:top-[17%] md:left-[21%] lg:top-[24%] lg:left-[56%] w-6 sm:w-8 md:w-12 lg:w-12 z-0"
      />

      {/* Bubble 4 (tiny) */}
      <img
        src={circle}
        alt="circle"
        className="floating absolute top-[26%] left-[21%] sm:top-[44%] sm:left-[53%] md:top-[21%] md:left-[20%] lg:top-[29%] lg:left-[55%] w-3 sm:w-4 md:w-7 lg:w-6 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 px-4">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="bg-gradient-to-b from-[#EAFFC8] to-[#B3FF3C] rounded-xl w-full max-w-2xl lg:max-w-md lg:h-[550px] p-8 flex flex-col justify-between text-[#001515]"
        >
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-4">
              Our <br /> Services
            </h2>
            <a
              href="#"
              className="text-sm underline text-[#001515] font-medium"
            >
              More Details...
            </a>
          </div>

          {/* Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-10">
            <div className="flex items-center gap-2 bg-black text-[#C6FF7F] px-3 py-2 rounded-full text-sm font-medium">
              <LayoutDashboard size={16} /> MVP Design
            </div>
            <div className="flex items-center gap-2 bg-[#001515] text-white px-3 py-2 rounded-full text-sm font-medium">
              <Layers size={16} /> Website Design
            </div>
            <div className="flex items-center gap-2 border border-red-500 text-red-600 px-3 py-2 rounded-full text-sm font-medium">
              <PenTool size={16} /> Graphics Design
            </div>
            <div className="flex items-center gap-2 bg-[#D82323] text-white px-3 py-2 rounded-full text-sm font-medium">
              <BadgeCheck size={16} /> Brand Identity
            </div>
          </div>
        </div>

        {/* Right Image Card */}
        <div
          ref={rightImageRef}
          className="relative w-full max-w-2xl h-auto lg:h-[550px] flex items-center justify-center"
        >
          <img
            src={man_woman}
            alt="collaboration"
            className="w-auto h-full object-cover rounded-tr-md rounded-bl-md"
          />

          {/* Chat Button */}
          <button className="absolute -bottom-0 right-2 sm:bottom-4 sm:right-4 md:bottom-3 md:right-10 lg:right-17 bg-[#C6FF7F] text-black rounded-md px-4 py-2 md:px-10 md:py-2 flex items-center gap-2 font-semibold shadow-lg text-xs sm:text-lg cursor-pointer">
            <MessageCircle size={16} />
            Let’s chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
