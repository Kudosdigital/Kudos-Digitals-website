import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurDna = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
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
        leftColumnRef.current,
        { autoAlpha: 0, x: -100 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftColumnRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        rightColumnRef.current,
        { autoAlpha: 0, x: 100 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      {/* Section Title */}
      <div
        ref={titleRef}
        className="w-full pb-6 text-center z-10 will-change-transform"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
          What <span className="text-[#C6FF7F]">is imprinted in our DNA?</span>
        </h2>
        <p className="text-white text-sm sm:text-base max-w-2xl mx-auto">
          At Kudos Digitals Agency, we believe in fostering a culture of
          innovation, collaboration, and continuous growth.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
        {/* Left Column */}
        <div ref={leftColumnRef} className="space-y-6 will-change-transform">
          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 h-72 sm:min-h-80 border border-white flex flex-col">
            <h2 className="text-[#AAD468] text-2xl sm:text-3xl font-bold mb-2">
              Mission:
            </h2>
            <p className="text-gray-300 text-lg mb-6 sm:mb-8 mt-auto">
              To empower businesses by transforming their digital visions into
              tangible success through end-to-end design, development, and
              deployment solutions.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white/10 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 h-72 sm:min-h-80 border border-white flex flex-col">
            <h2 className="text-[#AAD468] text-2xl sm:text-3xl font-bold mb-2">
              Vision:
            </h2>
            <p className="text-gray-300 text-lg mb-6 sm:mb-8 mt-auto">
              To be a leading force in digital transformation, consistently
              setting benchmarks in design innovation and strategic deployment
              excellence.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div
          ref={rightColumnRef}
          className="bg-white/10 backdrop-blur-3xl rounded-3xl p-6 sm:p-8 border border-white overflow-y-auto will-change-transform"
        >
          <h2 className="text-[#AAD468] text-2xl sm:text-3xl font-bold">
            Our Values
          </h2>

          <div className="mt-10 space-y-6">
            {[
              "Innovation: Constantly seeking new and better ways to solve problems and create value.",
              "Excellence: Committing to the highest standards in everything we do, from design to client service.",
              "Collaboration: Fostering a supportive and connected environment where diverse talents come together to achieve shared goals.",
              "Client Success: Prioritizing our clients' growth and celebrating their achievements as our own.",
              "Integrity: Operating with honesty, transparency, and ethical conduct in all interactions.",
            ].map((text, idx) => (
              <p key={idx} className="text-gray-300 text-lg">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDna;
