import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Link } from "react-router";

// image imports
import one from "../assets/1.webp";
import two from "../assets/2.webp";
import three from "../assets/3.webp";
import four from "../assets/4.webp";
import five from "../assets/5.webp";
import six from "../assets/6.webp";
import seven from "../assets/7.webp";
import eight from "../assets/8.webp";
import nine from "../assets/9.webp";
import ten from "../assets/10.webp";
import eleven from "../assets/11.webp";
import twelve from "../assets/12.webp";
import BackToTop from "../components/shared/BackToTop";

// sample data
export const users = [
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: one,
    category: "Brand Identity",
    title: "Alpha Seven",
    preview:
      "We helped Alpha Seven Solutions elevate their corporate identity with a bold, professional roll-up banner. Designed for clarity and visual impact at corporate events.",
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: two,
    category: "Event Branding",
    imageUrl1: eight,
    imageUrl2: nine,
    imageUrl3: ten,
    title: "Covenant University",
    preview:
      "We crafted bold and modern event branding for Covenant University's Fireside Chat, capturing attention and reflecting the prestige of its speakers and organizers.",
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: three,
    category: "Brand Identity",
    title: "TYUL Global Trades",
    preview:
      "We developed a bold and professional brand identity for TYUL Global Trades, capturing their global vision and commitment to value delivery.",
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: four,
    category: "Event Branding",
    imageUrl1: seven,
    imageUrl2: eleven,
    imageUrl3: twelve,
    title: "CEA",
    preview:
      "We created a dynamic visual identity and promotional materials to launch a symposium focused on building businesses in a challenging economy.",
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: five,
    category: "Event Branding",
    title: "Founders Friday",
    preview:
      "An exclusive event with Founders Friday. We crafted a sophisticated and clean promotional art card to announce a special dinner for founders.",
  },
  {
    id: Math.random().toString(36).slice(2, 10),
    imageUrl: six,
    category: "Graphics Design",
    title: "Nigeria British University",
    preview:
      "We created a vibrant and engaging promotional art card to attract prospective students and highlight the university's world-class education.",
  },
];

const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    "All",
    "Brand Identity",
    "Event Branding",
    "Graphics Design",
    "Website Design",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredUsers =
    selectedCategory === "All"
      ? users
      : users.filter(
          (user) =>
            user.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main className="bg-[#F9F9F9]">
      <header>
        <Navbar className="bg-[#FAFEF3]" />
        <div className="py-6 md:py-20 bg-[#FAFEF3] px-4 sm:px-6">
          <h1 className="text-[#001C1C] text-center text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
            Our Work.<span className="text-[#AAD468]"> Our Impact</span>
          </h1>
          <p className="text-center text-lg sm:text-xl mt-4 font-[500] text-[#656565] max-w-3xl mx-auto">
            Explore our diverse portfolio of successful projects that drive
            results.
          </p>
        </div>
      </header>

      {/* Filter Buttons */}
      <div className="py-10 flex flex-wrap gap-3 sm:gap-4 justify-center px-4">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 cursor-pointer rounded-full text-sm sm:text-base ${
              selectedCategory === category
                ? "bg-[#AAD468] text-black"
                : "bg-[#E5F2D0] text-[#535353]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Filtered Projects */}
      <div className="px-4 sm:px-6 md:px-28 mt-10 my-10 relative">
        {filteredUsers.length === 0 ? (
          <p className="text-center text-[#656565] text-lg sm:text-xl font-medium py-20">
            No projects found for "
            <span className="text-[#AAD468]">{selectedCategory}</span>"
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="rounded-xl shadow-lg shadow-[#4d4d4d] bg-[#001C1C] flex flex-col overflow-hidden"
              >
                <img
                  loading="lazy"
                  src={user.imageUrl}
                  alt={user.title}
                  className="object-cover h-56 sm:h-48 w-full"
                />
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs text-[#ABABAB]">{user.category}</p>
                    <h3 className="text-xl sm:text-2xl font-semibold text-[#AAD468] mt-1">
                      {user.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#ABABAB]">
                      {user.preview}
                    </p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <Link to={`/our-work/${user.id}`}>
                      <button className="bg-white text-[#001C1C] cursor-pointer text-sm px-4 py-2 rounded-3xl hover:bg-[#F9F9F9] transition-colors">
                        View Project
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
      <BackToTop />
    </main>
  );
};

export default OurWork;
