import { useEffect, useRef } from "react";
import logo from "../../assets/footer logo.png";
import {
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";
import { gsap } from "gsap";

const FooterNew = () => {
  const servicesRef = useRef(null);

  const services = [
    "UI Design",
    "Event Branding",
    "Brand Identity",
    "Website Design",
    "Flyers & Banner Design",
  ];

  useEffect(() => {
    const marquee = servicesRef.current;
    const content = marquee.querySelector(".marquee-content");

    gsap.set(content, { x: 0 });
    gsap.to(content, {
      x: -content.offsetWidth / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <footer className="bg-[#001C1C] text-white mt-10 relative z-30 w-full">
      {/* Services Marquee */}
      <div
        ref={servicesRef}
        className="relative overflow-hidden py-6 bg-[#AAD468] z-20"
      >
        <div className="marquee w-full overflow-hidden">
          <div className="marquee-content flex gap-12 items-center whitespace-nowrap">
            {[...services, ...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <span className="text-slate-900 font-bold text-lg lg:text-xl">
                  {service}
                </span>
                <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-10 px-5 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left section: Let’s Talk */}
          <div className="flex items-center relative justify-center md:justify-start">
            <div className="h-20 w-20 sm:h-24 sm:w-24 lg:h-36 lg:w-36 bg-[#AAD468] rounded-full shrink-0" />
            <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold absolute left-16 sm:left-20">
              Let’s Talk
            </h2>
          </div>

          {/* Right section: Logo & Socials */}
          <div className="flex flex-col items-center md:items-end space-y-5">
            <img src={logo} alt="footer logo" className="w-40 sm:w-48" />
            <div className="flex gap-4 text-white">
              <FacebookIcon className="hover:text-[#AAD468] transition" />
              <LinkedinIcon className="hover:text-[#AAD468] transition" />
              <TwitterIcon className="hover:text-[#AAD468] transition" />
              <InstagramIcon className="hover:text-[#AAD468] transition" />
            </div>
          </div>
        </div>

        <div className="h-px my-10 w-full bg-[#FAFAFA] opacity-30" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm gap-4">
          <p className="text-center md:text-left">
            © 2025 Kudos Digital. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 text-white">
            <p className="underline cursor-pointer hover:text-[#AAD468]">
              Privacy Policy
            </p>
            <p className="underline cursor-pointer hover:text-[#AAD468]">
              Terms of Service
            </p>
            <p className="underline cursor-pointer hover:text-[#AAD468]">
              Cookie Settings
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
