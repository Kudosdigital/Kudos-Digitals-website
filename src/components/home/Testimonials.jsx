import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import background_image from "../../assets/Subtract (1).webp";
import ShareModal from "../shared/ShareModal";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialRef = useRef(null);
  const timelineRef = useRef(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const testimonials = [
    {
      quote: `From concept to launch, Kudos Digital delivered a seamless and responsive website that perfectly represents our brand. They were patient, responsive, and technically sound. I couldn’t have asked for a better team.`,
      author: "Ibrahim Musa",
      company: "MusaTech Solutions",
    },
    {
      quote:
        "The attention to detail and creative approach from Kudos Digital exceeded our expectations. Their team transformed our vision into a stunning digital presence that drives real results.",
      author: "Sarah Johnson",
      company: "Johnson & Associates",
    },
    {
      quote:
        "Working with Kudos Digital was a game-changer for our business. Their expertise in web development and design helped us establish a strong online presence that connects with our audience.",
      author: "Michael Chen",
      company: "Chen Enterprises",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (testimonialRef.current) {
      if (timelineRef.current) timelineRef.current.kill();

      timelineRef.current = gsap.timeline();
      timelineRef.current.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }

    return () => timelineRef.current?.kill();
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") prevTestimonial();
      if (event.key === "ArrowRight") nextTestimonial();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <section className="relative w-full" aria-label="Customer testimonials">
        {/* Background image container */}
        <div className="relative w-full  mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <img
            src={background_image}
            alt="background"
            className="absolute inset-0 w-full h-full object-cover rounded-3xl z-0"
          />

          {/* Overlay content */}
          <div className="relative z-10 rounded-3xl px-4 sm:px-6 md:px-10 lg:px-[106px] py-14 sm:py-20 text-center max-w-full">
            <div
              ref={testimonialRef}
              className="mx-auto max-w-3xl px-2 sm:px-4"
            >
              <blockquote>
                <p className="text-slate-800 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium mb-8 sm:mb-12">
                  "{currentTestimonial.quote}"
                </p>
                <footer>
                  <cite className="not-italic">
                    <div className="font-bold text-slate-900 text-lg sm:text-xl mb-1">
                      {currentTestimonial.author}
                    </div>
                    <div className="text-slate-600 text-base sm:text-lg">
                      {currentTestimonial.company}
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-3 mt-10 sm:mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 cursor-pointer sm:w-4 sm:h-4 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50 ${
                    index === currentIndex
                      ? "bg-lime-400 scale-125"
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons (bottom-right of image area) */}
            <div className="absolute -bottom-6 right-21 sm:-bottom-8 sm:right-4 lg:right-16 lg:-bottom-14 flex mx-auto gap-6 z-20">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 cursor-pointer sm:w-18 sm:h-18 bg-lime-400 hover:bg-lime-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-400/50 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 group-hover:scale-110 transition-transform duration-200" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 cursor-pointer sm:w-18 sm:h-18 bg-lime-400 hover:bg-lime-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-lime-400/50 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-slate-900 group-hover:scale-110 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action Section */}
        <div className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#AAD468] mb-10 sm:mb-14 leading-tight">
              Your idea deserves
              <br />
              to be heard.
            </h2>
            <button
              onClick={handleShareModalOpen}
              className="bg-lime-400 cursor-pointer hover:bg-lime-300 text-slate-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-lime-400/50"
            >
              Share your idea
            </button>
          </div>
        </div>

        {/* Screen Reader Instructions */}
        <div className="sr-only">
          <p>Use left and right arrow keys to navigate testimonials</p>
        </div>
      </section>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
};

export default Testimonials;
