import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Facebook, Linkedin, Twitter, Instagram } from "lucide-react";
import blur_image from "../../assets/Ellipse 30.webp";

const Footer = () => {
  const footerRef = useRef(null);
  const servicesRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const marqueeContent =
      servicesRef.current?.querySelector(".marquee-content");

    if (!marqueeContent) return;

    const width = marqueeContent.offsetWidth; // ✅ Cache early

    const ctx = gsap.context(() => {
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

      gsap.set(marqueeContent, { x: 0 });

      gsap.to(marqueeContent, {
        x: -width / 3,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
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
          <div className="marquee-content flex gap-12 items-center whitespace-nowrap will-change-transform">
            {[...services, ...services, ...services].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <span className="text-slate-900 font-bold text-base sm:text-lg md:text-xl">
                  {service}
                </span>
                <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Content with Blur Background */}
      <div className="relative">
        <div className="absolute inset-0 z-10">
          <img
            loading="lazy"
            src={blur_image}
            alt="Blur background"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          ref={contentRef}
          className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 md:py-12"
        >
          <div className="mx-auto">
            {/* Main CTA */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16">
              <h2 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 lg:mb-0 max-w-[90%]">
                LET'S WORK
                <br />
                TOGETHER
              </h2>
              <button
                aria-label="Share your ideas with Kudos Digitals"
                className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-[#F9F871] hover:bg-lime-300 rounded-full flex items-center justify-center text-slate-900 font-bold text-base sm:text-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-400/50 group shadow-2xl shadow-[#36510D]/90"
              >
                <span className="group-hover:scale-110 transition-transform duration-200 text-center leading-tight">
                  Share
                  <br />
                  Your
                  <br />
                  Ideas
                </span>
              </button>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col md:flex-row justify-between gap-8">
              <div>
                <h3 className="text-[#AAD468] text-xl sm:text-2xl font-bold mb-4">
                  Contact Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:hello@kudosdigitals.com.ng"
                    className="block text-white text-base sm:text-lg hover:text-[#AAD468] transition-colors duration-300"
                  >
                    hello@kudosdigitals.com.ng
                  </a>
                  <a
                    href="tel:+2348134419302"
                    className="block text-white text-base sm:text-lg hover:text-[#AAD468] transition-colors duration-300"
                  >
                    +234 8134 419 302
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[#AAD468] text-xl sm:text-2xl font-bold mb-4">
                  Follow Us
                </h3>
                <div
                  className="flex gap-4 flex-wrap"
                  role="navigation"
                  aria-label="Social media links"
                >
                  {[
                    { Icon: Facebook, label: "Follow us on Facebook" },
                    { Icon: Linkedin, label: "Connect with us on LinkedIn" },
                    { Icon: Twitter, label: "Follow us on Twitter" },
                    { Icon: Instagram, label: "Follow us on Instagram" },
                  ].map(({ Icon, label }, idx) => (
                    <a
                      key={idx}
                      href="#"
                      aria-label={label}
                      className="w-11 h-11 sm:w-12 sm:h-12 bg-white/10 hover:bg-[#AAD468] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#AAD468]/50 group"
                    >
                      <Icon className="w-5 h-5 text-white group-hover:text-slate-900 transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="border-t border-white/20 mt-12 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm text-center">
                  © {new Date().getFullYear()} Kudos Digital. All rights
                  reserved.
                </p>

                <div className="flex flex-col md:flex-row gap-4 text-sm text-center">
                  <a
                    href="#"
                    aria-label="Read our privacy policy"
                    className="text-gray-400 hover:text-lime-400 underline"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    aria-label="Read our terms of service"
                    className="text-gray-400 hover:text-lime-400 underline"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    aria-label="Adjust your cookie settings"
                    className="text-gray-400 hover:text-lime-400 underline"
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
