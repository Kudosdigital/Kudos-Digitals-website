import { useRef, useState, useEffect } from "react";
import placeholder from "../../assets/placeholder.png";
import teamMember1 from "../../assets/teamMember1.png";
import teamMember2 from "../../assets/teamMember2.png";
import teamMember3 from "../../assets/teamMember3.jpg";
import teamMember4 from "../../assets/teamMember4.png";

const teamMembers = [
  {
    name: "Courage OGBONNA",
    role: "Creative Director",
    image: teamMember1,
    linkedin: "#",
  },
  {
    name: "Silver DAVIDSON",
    role: "Product Designer",
    image: teamMember2,
    linkedin: "#",
  },
  {
    name: "Emmanuel ONI",
    role: "Product Designer",
    image: teamMember3,
    linkedin: "#",
  },
  {
    name: "Esther ADEBAYO",
    role: "Product Manager",
    image: teamMember4,
    linkedin: "#",
  },
  {
    name: "Ifeoluwa OBASA",
    role: "Human Resources Manager",
    image: "",
    linkedin: "#",
  },
  {
    name: "Oreoluwa ALABA",
    role: "Frontend Developer",
    image: "",
    linkedin: "#",
  },
  {
    name: "Pelumi LAST",
    role: "Frontend Developer",
    image: "",
    linkedin: "#",
  },
  {
    name: "Marvellous LAST",
    role: "Frontend Developer",
    image: "",
    linkedin: "#",
  },
  {
    name: "Richard LAST",
    role: "Frontend Developer",
    image: "",
    linkedin: "#",
  },
  {
    name: "Lovelyn EJIKEME",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
  {
    name: "Akanbi OLUWO",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
  {
    name: "Caroline NIKORO",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
  {
    name: "Comfort ETIM",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
  {
    name: "Eucharia DURU",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
  {
    name: "Success LAST",
    role: "INSERT ROLE HERE",
    image: "",
    linkedin: "#",
  },
];

const cardBaseWidth = 200;
const cardGap = 20;
const visibleCards = 3;

const TeamCarousel = () => {
  const scrollRef = useRef(null);
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(teamMembers.length / visibleCards);

  const scrollToPage = (index) => {
    if (!scrollRef.current) return;
    const scrollOffset = index * (cardBaseWidth + cardGap) * visibleCards;
    scrollRef.current.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });
    setPage(index);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const handleScroll = () => {
      const scrollLeft = ref.scrollLeft;
      const cardSpace = (cardBaseWidth + cardGap) * visibleCards;
      const currentPage = Math.floor(scrollLeft / cardSpace);
      setPage(currentPage);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        ref.scrollLeft += e.deltaY;
      }
    };

    ref.addEventListener("scroll", handleScroll);
    ref.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      ref.removeEventListener("scroll", handleScroll);
      ref.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="py-14 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6FCE8] relative">
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-6 pr-[100px] w-full"
        style={{ WebkitOverflowScrolling: "touch" }} // makes sure iOS scroll feels native
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative bg-[#DFF0BC] rounded-3xl overflow-hidden flex-shrink-0 w-[200px] md:w-[200px] h-[420px] hover:w-[300px] transition-all duration-500 cursor-pointer"
          >
            <img
              src={member.image || placeholder}
              alt={member.name}
              className="object-cover w-full h-full group-hover:brightness-75 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 text-white translate-y-full group-hover:translate-y-0 transition-all duration-500">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm">{member.role}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[#C6E29A] underline text-sm"
                >
                  View LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPage(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              page === i ? "bg-lime-600" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default TeamCarousel;
