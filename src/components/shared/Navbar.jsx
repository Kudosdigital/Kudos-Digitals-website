import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Group 625860.png";
import alt_logo from "../../assets/altLogo.png";
import ShareModal from "./ShareModal";

const Navbar = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our_work" },
    { name: "Our Brand", path: "/our_brand" },
    { name: "Our Story", path: "/our_story" },
    { name: "Contact Us", path: "/join_us" },
  ];

  const navLinkClasses = (itemPath) => {
    const isCurrent =
      location.pathname === itemPath ||
      (itemPath === "/our_story" && location.pathname.startsWith("/articles"));

    return `block px-4 py-2 rounded-full text-sm font-black transition-all duration-200 ${
      isCurrent
        ? `${
            className === "bg-[#FAFEF3]" ? "text-[#002424]" : "text-[#AAD468]"
          }`
        : "text-[#8AA1A1] hover:underline font-medium"
    }`;
  };

  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className={`${className} px-4 py-6 lg:px-8 relative z-50`}>
        <div className="flex items-center justify-between  mx-auto">
          <img
            className="w-24"
            src={className === "bg-[#FAFEF3]" ? alt_logo : logo}
            alt="Kudos Digital Agency Logo"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            <div
              className={`${
                className === "bg-[#FAFEF3]"
                  ? ""
                  : "bg-slate-700/20 backdrop-blur-2xl border border-gray-500/50 rounded-full"
              } px-2 py-2 flex items-center space-x-1`}
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={() => navLinkClasses(item.path)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleShareModalOpen}
              className={`hidden lg:flex ${
                className === "bg-[#FAFEF3]"
                  ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                  : "bg-[#AAD468] hover:bg-lime-300"
              }  text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition`}
            >
              Share Your Idea
            </button>

            <button
              className="lg:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[500px] opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`${
              className === "bg-[#FAFEF3]"
                ? ""
                : "bg-slate-700/20 backdrop-blur-2xl "
            } p-4 space-y-3 border border-gray-500/50 rounded-2xl`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={navLinkClasses}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <button
              onClick={handleShareModalOpen}
              className={`w-full ${
                className === "bg-[#FAFEF3]"
                  ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                  : "bg-[#AAD468] hover:bg-lime-300"
              } text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition`}
            >
              Share Your Idea
            </button>
          </div>
        </div>
      </nav>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
