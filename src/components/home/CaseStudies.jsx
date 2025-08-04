import { useEffect, useRef, useState } from "react";
import { ArrowDownLeft, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../../assets/TYUL.webp";
import image2 from "../../assets/6.webp";
import image3 from "../../assets/CEA.webp";
import circle1 from "../../assets/Ellipse 37.webp";
import circle2 from "../../assets/Ellipse 38.webp";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
  {
    id: 1,
    title: "TYUL",
    subtitle: "Brand Identity",
    description:
      "We created a vibrant and engaging promotional art card to attract prospective students and highlight the university’s world-class education.",
    image: image1,
  },
  {
    id: 2,
    title: "NIGERIAN BRITISH UNIVERSITY",
    subtitle: "Brand Identity",
    description:
      "Developed a compelling brand identity for NBU, focused on innovation and global recognition.",
    image: image2,
  },
  {
    id: 3,
    title: "CEA",
    subtitle: "Event Branding",
    description:
      "Crafted engaging event branding materials for CEA’s regional summit, drawing strong audience engagement.",
    image: image3,
  },
];

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="px-4 py-20 relative overflow-hidden">
      <div className="container mx-auto max-w-8xl relative z-10 bg-lime-50 rounded-3xl p-6 sm:p-10 md:p-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-300 pb-4 gap-4">
          <div ref={titleRef}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Case Studies
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-right">
            <p className="text-sm font-semibold text-slate-700 mb-1">
              Some of our best works
            </p>
            <ArrowDownLeft size={40} className="text-slate-800" />
          </div>
        </div>

        {/* Horizontal Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {caseStudies.map((study, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={study.id}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`transition-all duration-500 flex-shrink-0 rounded-2xl overflow-hidden relative 
                  ${
                    isHovered
                      ? "bg-white w-[90vw] sm:w-[600px] md:w-[700px]"
                      : "bg-lime-200 w-[240px] sm:w-[300px] md:w-[320px] hover:bg-white hover:w-[90vw] sm:hover:w-[600px]"
                  } h-[360px] group p-4 sm:p-6`}
              >
                {/* Title + Subtitle */}
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="flex flex-col h-full">
                    <h3
                      className={`${
                        isHovered ? "text-lg" : "text-2xl sm:text-4xl"
                      } font-bold text-slate-900 mb-1`}
                    >
                      {study.title}
                    </h3>
                    <p className="text-sm font-medium text-[#003333] underline mb-4">
                      {study.subtitle}
                    </p>

                    {isHovered ? (
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-2 my-auto">
                        <p className="text-sm text-slate-600 mb-2 sm:mb-6 max-w-sm">
                          {study.description}
                        </p>
                        <img
                          src={study.image}
                          alt={study.title}
                          className="w-28 sm:w-48 h-auto object-contain"
                        />
                      </div>
                    ) : (
                      <>
                        {/* Decorative Circles */}
                        <img
                          src={circle1}
                          alt="circle1"
                          className="absolute bottom-4 right-8 w-30 sm:w-40"
                        />
                        <img
                          src={circle2}
                          alt="circle2"
                          className="absolute bottom-8 left-6 w-10 sm:w-16"
                        />
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <div>
                    {isHovered ? (
                      <button className="flex items-center hover:underline cursor-pointer text-sm font-semibold text-slate-800 hover:text-black transition-colors">
                        Read More
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    ) : (
                      <span className="text-sm text-slate-700 italic">
                        View Case Study Details →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate("/our-work")}
            className="bg-lime-400 text-slate-900 px-8 sm:px-10 py-3 rounded-xl font-medium cursor-pointer hover:bg-lime-500 transition-all duration-300"
          >
            See More
          </button>
        </div>
      </div>

      {/* Hide Scrollbar */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default CaseStudies;
