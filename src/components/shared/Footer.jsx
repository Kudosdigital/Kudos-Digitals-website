import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import blur_image from "../../assets/Ellipse 30.png";

const Footer = () => {
  const footerRef = useRef(null);
  const servicesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer content on load
      gsap.fromTo(
        [servicesRef.current, contentRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        }
      );

      // Continuous marquee animation
      const marqueeContent =
        servicesRef.current?.querySelector(".marquee-content");
      if (marqueeContent) {
        gsap.set(marqueeContent, { x: 0 });
        gsap.to(marqueeContent, {
          x: -marqueeContent.offsetWidth / 3,
          duration: 20,
          ease: "none",
          repeat: -1,
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    "UI Design",
    "Event Branding",
    "Brand Identity",
    "Website Design",
    "Social Media Graphics",
    "Flyers & Banner Design",
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-tr from-[#003333] to-[#000000] overflow-hidden"
    >
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

      {/* Main Footer Section with background blur */}
      <div className="relative">
        {/* Blur Image Behind Footer Content */}
        <div className="absolute inset-0 z-10">
          <img
            src={blur_image}
            alt="Blur background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Footer Content */}
        <div
          ref={contentRef}
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10"
        >
          <div className="max-w-7xl mx-auto">
            {/* Main CTA Section */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 lg:mb-20">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white leading-tight mb-4">
                  LET'S WORK
                  <br />
                  TOGETHER
                </h2>
              </div>
              <div className="flex-shrink-0">
                <button className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-[#F9F871] hover:bg-lime-300 rounded-full flex items-center justify-center text-slate-900 font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-400/50 group shadow-2xl shadow-[#36510D]/90">
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    Share
                    <br />
                    Your
                    <br />
                    Ideas
                  </span>
                </button>
              </div>
            </div>

            {/* Contact and Social Links */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Contact Information */}
              <div>
                <h3 className="text-[#AAD468] text-xl sm:text-2xl font-bold mb-6">
                  Contact Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@kudosdigitals.com.ng"
                    className="block text-white text-lg sm:text-xl hover:text-[#AAD468] transition-colors duration-300"
                  >
                    hello@kudosdigitals.com.ng
                  </a>
                  <a
                    href="tel:+2348134419302"
                    className="block text-white text-lg sm:text-xl hover:text-[#AAD468] transition-colors duration-300"
                  >
                    +234 8134 419 302
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-[#AAD468] text-xl sm:text-2xl text-end font-bold mb-6">
                  Follow Us
                </h3>
                <div className="flex flex-row-reverse md:flex-row gap-4">
                  <a
                    href="#"
                    aria-label="Follow us on Facebook"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#AAD468] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#AAD468]/50 group"
                  >
                    <Facebook className="w-6 h-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    aria-label="Follow us on LinkedIn"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#AAD468] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#AAD468]/50 group"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    aria-label="Follow us on Twitter/X"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#AAD468] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#AAD468]/50 group"
                  >
                    <Twitter className="w-6 h-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    aria-label="Follow us on Instagram"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 hover:bg-[#AAD468] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#AAD468]/50 group"
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:text-slate-900 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20 mt-16 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © 2025 Kudos Digital. All rights reserved.
                </p>
                <div className="flex flex-col md:flex-row text-center gap-6 text-sm">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 underline"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-lime-400 transition-colors duration-300 underline"
                  >
                    Cookie Settings
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
