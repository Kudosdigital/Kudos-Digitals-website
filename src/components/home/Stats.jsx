import { useRef, useEffect } from "react";
import icon1 from "../../assets/icon.webp";
import icon2 from "../../assets/icon (1).webp";
import icon3 from "../../assets/icon (2).webp";

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

  useEffect(() => {
    const observers = [];

    stats.forEach((stat, index) => {
      const el = countRefs.current[index];
      if (!el) return;

      const animateCount = () => {
        let start = null;
        const duration = 2000;
        const endValue = stat.endValue;
        const isDecimal = stat.isDecimal;

        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const value = Math.min(progress / duration, 1) * endValue;

          const formatted = isDecimal ? value.toFixed(2) : Math.floor(value);
          el.textContent = formatted + (!isDecimal ? "+" : "");

          if (progress < duration) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section ref={sectionRef} className="mb-32 px-4 sm:px-8">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row w-full justify-evenly gap-8 text-white text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="flex flex-col items-center gap-4 sm:gap-6"
          >
            <img
              loading="lazy"
              src={stat.icon}
              alt="Stat Icon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
            <div className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none will-change-transform">
              <span ref={(el) => (countRefs.current[index] = el)}>
                {stat.isDecimal ? "0.00" : "0+"}
              </span>
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
