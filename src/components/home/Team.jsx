import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamMember1 from "../../assets/teamMember1.png";
import teamMember2 from "../../assets/teamMember2.png";
import teamMember3 from "../../assets/teamMember3.jpg";
import teamMember4 from "../../assets/teamMember4.png";
import unlock from "../../assets/unlock.jpg";
import TYUL from "../../assets/TYUL.jpg";
import mockup from "../../assets/Mockup.jpg";
import mockup2 from "../../assets/Mockup2.jpg";
import mockup3 from "../../assets/Mockup3.jpg";
import fire from "../../assets/fire.jpg";
import great from "../../assets/great.jpg";
import IITA from "../../assets/IITA.jpg";

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const sectionRef = useRef(null);
  const teamMembersRef = useRef(null);
  const counterRef = useRef(null);
  const storyScrollRef = useRef(null);
  const [projectCount, setProjectCount] = useState(0);

  // Team members data (you'll add your image paths)
  const teamMembers = [
    {
      id: 1,
      name: "Courage OGBONNA",
      role: "Creative Director",
      image: teamMember1,
    },
    {
      id: 2,
      name: "Emmanuel ONI",
      role: "Product Designer",
      image: teamMember2,
    },
    {
      id: 3,
      name: "Silver DAVIDSON",
      role: "Product Designer",
      image: teamMember3,
    },
    {
      id: 4,
      name: "Esther ADEBAYO",
      role: "Product Manager",
      image: teamMember4,
    },
    { id: 5, name: "Team Member 5", role: "Developer", image: "" },
  ];

  // Story cards data
  const storyCards = [
    {
      id: 1,
      title: "The Kudos Story",
      subtitle: "July 19, 2023",
      description:
        "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
      author: "by Kudos Digitals",
      image: "",
    },
    {
      id: 2,
      title: "Our Journey",
      subtitle: "Aug 15, 2023",
      description: "From humble beginnings to industry leaders",
      author: "by Kudos Digitals",
      image: "",
    },
    {
      id: 3,
      title: "Innovation Hub",
      subtitle: "Sep 20, 2023",
      description: "Building the future of digital experiences",
      author: "by Kudos Digitals",
      image: "",
    },
  ];

  // Projects data for infinite scroll with varied sizes
  const projectsData = [
    {
      id: 1,
      title: "Unlock Your Potential",
      image: unlock,
      color: "border-red-500",
      size: "large",
    },
    {
      id: 2,
      title: "TYUL Global Trades",
      image: TYUL,
      color: "border-blue-100",
      size: "small",
    },
    {
      id: 3,
      title: "BeUp Mobile App",
      image: mockup,
      color: "border-green-200",
      size: "tall",
    },
    {
      id: 4,
      title: "BeUp Landing",
      image: mockup2,
      color: "border-yellow-100",
      size: "small",
    },
    {
      id: 5,
      title: "Fireside Chat",
      image: fire,
      color: "border-purple-900",
      size: "wide",
    },
    {
      id: 6,
      title: "Let's Remind",
      image: IITA,
      color: "border-yellow-400",
      size: "small",
    },
    {
      id: 7,
      title: "Something Coming",
      image: mockup3,
      color: "border-gray-800",
      size: "small",
    },
    {
      id: 8,
      title: "Great Trips",
      image: great,
      color: "border-blue-500",
      size: "small",
    },
  ];

  const useVerticalScroll = (ref) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const totalHeight = el.scrollHeight;
      const clone = el.cloneNode(true);
      el.appendChild(clone);

      const tl = gsap.timeline({ repeat: -1, paused: false });
      tl.to(el, {
        y: -totalHeight / 2,
        duration: 60,
        ease: "linear",
      });

      const handleMouseEnter = () => tl.pause();
      const handleMouseLeave = () => tl.resume();

      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
        tl.kill();
      };
    }, [ref]);
  };

  // Duplicate projects for seamless infinite scroll
  const infiniteProjects = [...projectsData, ...projectsData, ...projectsData];

  const initAnimations = () => {
    const ctx = gsap.context(() => {
      // Team members animation
      gsap.fromTo(
        ".team-member",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: teamMembersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Counter animation
      gsap.fromTo(
        counterRef.current,
        { innerText: 0 },
        {
          innerText: 10,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          onUpdate: function () {
            setProjectCount(Math.floor(this.targets()[0].innerText));
          },
        }
      );

      // Story cards animation
      gsap.fromTo(
        ".story-card",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: storyScrollRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  };

  useEffect(() => {
    initAnimations();
  }, []);

  const scrollStoryLeft = () => {
    storyScrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollStoryRight = () => {
    storyScrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  // Function to get card size classes based on size property
  const getCardSize = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "wide":
        return "col-span-3";
      case "tall":
        return "row-span-2";
      default:
        return "";
    }
  };

  // Function to get card height based on size
  const getCardHeight = (size) => {
    switch (size) {
      case "large":
        return "h-48 sm:h-64 md:h-72";
      case "tall":
        return "h-48 sm:h-64 md:h-72";
      case "wide":
        return "h-24 sm:h-32";
      default:
        return "h-24 sm:h-32";
    }
  };

  const projectsRef = useRef(null);
  useVerticalScroll(projectsRef);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-full">
        {/* Left Column */}
        <div className="space-y-4 sm:space-y-6">
          {/* Team Members Card */}
          <div className="bg-linear-to-r from-[#001515] to-[#AAD468] backdrop-blur-sm rounded-3xl p-6 sm:p-8 h-72 sm:h-80">
            <h2 className="text-white text-xl sm:text-2xl font-bold mb-2">
              Our Team Members
            </h2>
            <p className="text-gray-300 text-sm mb-6 sm:mb-8">
              A passionate crew of creatives, strategists, and innovators
              driving bold ideas forward.
            </p>

            <div
              ref={teamMembersRef}
              className="flex -space-x-2 sm:-space-x-4 mb-6 sm:mb-8"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="team-member relative group"
                  style={{ zIndex: teamMembers.length - index }}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 sm:border-3 border-[#AAD468] overflow-hidden bg-gray-600 hover:scale-110 transition-transform duration-300">
                    <img
                      src={
                        member.image ||
                        `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face`
                      }
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-lg font-medium hover:bg-white transition-colors text-sm sm:text-base">
              Join us Today
            </button>
          </div>

          {/* Our Story Card */}
          <div className="bg-[#AAD468] h-80 sm:h-auto rounded-3xl p-6 sm:p-8 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-0">
              <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold">
                Our Story
              </h2>
              <button className="bg-[#002424] text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors self-start sm:self-auto">
                Read Our Story
              </button>
            </div>

            <div className="relative">
              <div
                ref={storyScrollRef}
                className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {storyCards.map((card) => (
                  <div
                    key={card.id}
                    className="story-card flex-shrink-0 w-64 sm:w-70"
                  >
                    <div className="bg-white/40 border border-white backdrop-blur-2xl rounded-2xl p-3 sm:p-4 h-36 sm:h-40">
                      <div className="flex h-full items-center gap-2 sm:gap-3">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-300 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={
                              card.image ||
                              "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=100&h=100&fit=crop"
                            }
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-gray-500 text-xs mb-1">
                            {card.subtitle}
                          </p>
                          <h3 className="text-gray-900 font-bold text-sm mb-1 line-clamp-1">
                            {card.title}
                          </h3>
                          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                            {card.description}
                          </p>
                          <p className="text-gray-500 text-xs">{card.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="absolute top-43 sm:top-45 -translate-y-1/2 left-0 right-0 flex justify-between px-2 pointer-events-none">
                <button
                  onClick={scrollStoryLeft}
                  className="pointer-events-auto  cursor-pointer bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={scrollStoryRight}
                  className="pointer-events-auto cursor-pointer bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Projects */}
        <div className="bg-linear-to-b from-[#B3FF3C] to-[#FFFFFF] rounded-3xl p-6 h-150 sm:h-auto sm:p-8 relative overflow-hidden">
          {/* Fixed Header */}
          <div className="relative z-10 mb-4 sm:mb-6">
            <div className="text-gray-900 text-6xl sm:text-7xl lg:text-8xl font-black leading-none">
              <span ref={counterRef}>{projectCount}</span>+
            </div>
            <h2 className="text-gray-900 text-xl sm:text-2xl font-bold">
              Successful
              <br />
              Projects
            </h2>
          </div>

          {/* Scrollable Projects Container */}
          <div
            className="absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 top-40 sm:top-48 lg:top-52 bottom-4 sm:bottom-6 lg:bottom-8 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <div ref={projectsRef}>
              {/* Grid with masonry-like layout */}
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-[6px] auto-rows-min">
                {infiniteProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${Math.floor(
                      index / projectsData.length
                    )}`}
                    className={`project-card group cursor-pointer ${getCardSize(
                      project.size
                    )}`}
                  >
                    <div
                      className={`border-2 ${
                        project.color
                      } rounded-2xl ${getCardHeight(
                        project.size
                      )} overflow-hidden relative`}
                    >
                      <img
                        src={
                          project.image ||
                          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop"
                        }
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-black/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-white font-medium text-xs sm:text-sm text-center px-2">
                          {project.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
