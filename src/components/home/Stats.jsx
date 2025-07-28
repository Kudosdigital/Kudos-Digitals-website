import { useRef, useEffect, useState } from "react";
import icon1 from "../../assets/icon.png";
import icon2 from "../../assets/icon (1).png";
import icon3 from "../../assets/icon (2).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    id: 1,
    icon: icon1,
    label: "Successful\nProjects",
    endValue: 10,
    isDecimal: false,
  },
  {
    id: 2,
    icon: icon2,
    label: "Happy\nClients",
    endValue: 15,
    isDecimal: false,
  },
  {
    id: 3,
    icon: icon3,
    label: "Average Client\nScore (5.0)",
    endValue: 4.95,
    isDecimal: true,
  },
];

const Stats = () => {
  const sectionRef = useRef(null);
  const countRefs = useRef([]);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const ctx = gsap.context(() => {
      stats.forEach((stat, index) => {
        gsap.fromTo(
          countRefs.current[index],
          { innerText: 0 },
          {
            innerText: stat.endValue,
            duration: 2,
            ease: "power2.out",
            snap: { innerText: stat.isDecimal ? 0.01 : 1 },
            scrollTrigger: {
              trigger: countRefs.current[index],
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            onUpdate: function () {
              const value = this.targets()[0].innerText;
              const formatted = stat.isDecimal
                ? parseFloat(value).toFixed(2)
                : Math.floor(value);
              setCounts((prev) => {
                const updated = [...prev];
                updated[index] = formatted;
                return updated;
              });
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 px-4 sm:px-8">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row w-full justify-evenly gap-8 text-white text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <img
              src={stat.icon}
              alt="Stat Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none">
              <span ref={(el) => (countRefs.current[index] = el)}>
                {counts[index]}
              </span>
              {!stat.isDecimal && "+"}
            </div>
            <h2 className="text-lg sm:text-xl font-semibold whitespace-pre-line leading-tight">
              {stat.label}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
