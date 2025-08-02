import { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import BLOT from "../../assets/BLOT BEAUTY.webp";
import JETRIDE from "../../assets/JETRIDE SVG.webp";
import ALPHA_SEVEN_SOLUTIONS from "../../assets/ALPHA 7.webp";
import ABIDOL_PHARMA from "../../assets/ABIDOL.webp";
import ULE_HOMES from "../../assets/ULE HOMES.webp";

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const brandsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          descriptionRef.current,
          brandsRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      const tl = gsap.timeline();

      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          brandsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      gsap.fromTo(
        ".stat-number",
        {
          innerText: 0,
        },
        {
          innerText: (i, target) => target.dataset.value,
          duration: 2,
          delay: 1.5,
          ease: "power2.out",
          snap: { innerText: 1 },
          stagger: 0.2,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const brands = [
    { name: "ULÉ HOMES", logo: ULE_HOMES },
    { name: "ABIDOL PHARMA", logo: ABIDOL_PHARMA },
    { name: "ALPHA SEVEN", logo: ALPHA_SEVEN_SOLUTIONS },
    { name: "JETRIDE", logo: JETRIDE },
    { name: "BLOT", logo: BLOT },
  ];

  return (
    <section ref={heroRef} className="relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-6 lg:py-24">
        {/* Top Banner */}
        <div ref={subtitleRef} className="flex justify-center mb-12">
          <div className="bg-linear-to-r from-[#AAD468]/60 to-[#495B2D99]/20 backdrop-blur-2xl rounded-full px-6 py-3 border border-white/50 max-w-full">
            <div className="flex items-center space-x-3 text-white font-semibold group">
              <span className="text-sm truncate overflow-hidden whitespace-nowrap max-w-[200px] sm:max-w-none">
                Kudos Digitals delivers user-centric solutions that convert.
              </span>
              <span className="bg-[#AAD468] p-2 rounded-full group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={16} className="text-[#FEFEFE]" />
              </span>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div ref={titleRef} className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
            Empowering businesses to scale.
            <br />
            We <span className="text-[#AAD468]">design</span>,{" "}
            <span className="text-[#AAD468]">develop</span>, and{" "}
            <span className="text-[#AAD468]">deploy</span> cutting-edge digital
            solutions.
          </h1>
        </div>

        {/* Description */}
        <div ref={descriptionRef} className="text-center mb-16">
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            We empower businesses with end-to-end digital transformation. From
            innovative UI/UX and robust development to flawless deployment.
          </p>
        </div>
      </div>

      {/* Brand Logos Carousel */}
      <div
        ref={brandsRef}
        className="relative overflow-hidden py-10 bg-white/20 backdrop-blur-2xl"
      >
        <div className="marquee group w-full overflow-hidden">
          <div className="marquee-content flex gap-16 items-center">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 flex items-center justify-center"
                style={{ width: "160px" }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
