import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/Group 625860.webp";
import alt_logo from "../../assets/altLogo.webp";
import ShareModal from "./ShareModal";

const Navbar = ({ className = "" }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isContactPage = location.pathname === "/contact-us";

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Our Work", path: "/our-work" },
    { name: "Our Brand", path: "/our-brand" },
    { name: "Our Story", path: "/our-story" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  const navLinkClasses = (itemPath) => {
    const isCurrent =
      location.pathname === itemPath ||
      (itemPath === "/our-story" &&
        location.pathname.startsWith("/articles")) ||
      (itemPath === "/our-work" && location.pathname.startsWith("/our-work/"));

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`${className} px-4 py-6 lg:px-8 relative z-50`}>
        <div className="flex items-center justify-between mx-auto">
          <img
            loading="lazy"
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
                  aria-label={`Navigate to ${item.name}`}
                  className={() => navLinkClasses(item.path)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center space-x-4">
            {isContactPage ? (
              <button
                onClick={() => navigate("/careers")}
                aria-label="Go to careers page"
                className={`hidden lg:flex ${
                  className === "bg-[#FAFEF3]"
                    ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                    : "bg-[#AAD468] hover:bg-lime-300"
                } text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition mr-0`}
              >
                Join Us Today
              </button>
            ) : (
              <button
                onClick={handleShareModalOpen}
                aria-label="Open Share Your Idea modal"
                className={`hidden lg:flex ${
                  className === "bg-[#FAFEF3]"
                    ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                    : "bg-[#AAD468] hover:bg-lime-300"
                } text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition mr-0`}
              >
                Share Your Idea
              </button>
            )}

            <button
              className={`lg:hidden ${
                className === "bg-[#FAFEF3]"
                  ? "text-[#001C1C]"
                  : "text-gray-300"
              } p-2`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={
                isMobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
                : "bg-slate-700/20 backdrop-blur-2xl"
            } p-4 space-y-3 border border-gray-500/50 rounded-2xl`}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                aria-label={`Navigate to ${item.name}`}
                className={() => navLinkClasses(item.path)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {isContactPage ? (
              <button
                onClick={() => {
                  navigate("/careers");
                  setIsMobileMenuOpen(false);
                }}
                aria-label="Go to careers page"
                className={`w-full ${
                  className === "bg-[#FAFEF3]"
                    ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                    : "bg-[#AAD468] hover:bg-lime-300"
                } text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition`}
              >
                Join Us Today
              </button>
            ) : (
              <button
                onClick={handleShareModalOpen}
                aria-label="Open Share Your Idea modal"
                className={`w-full ${
                  className === "bg-[#FAFEF3]"
                    ? "bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A]"
                    : "bg-[#AAD468] hover:bg-lime-300"
                } text-[#001C1C] px-6 py-2 rounded-lg text-sm font-semibold cursor-pointer transition`}
              >
                Share Your Idea
              </button>
            )}
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
