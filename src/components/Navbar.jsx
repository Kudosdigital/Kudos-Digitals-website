import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Group 625860.png";
import altLogo from "../assets/altLogo.png";
import { Link, useLocation, useMatch } from "react-router-dom"; // Import useMatch

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [buttonBG, setButtonBG] = useState('');
  const [nav, setNav] = useState('');
  const [textColorMain, setTextColorMain] = useState(''); // Renamed for clarity
  const [textColorHover, setTextColorHover] = useState(''); // Renamed for clarity

  const location = useLocation();

  // Use useMatch to accurately check for /ourWork and its sub-routes
  const isOurWorkRoute = useMatch("/ourWork/*"); // Matches /ourWork and /ourWork/:id

  useEffect(() => {
    if (isOurWorkRoute) {
      setButtonBG('bg-[#001C1C] hover:bg-[#264444]');
      setNav(''); // No background for Navbar
      setTextColorMain('text-[#001C1C]'); // Text color for links on this page
      setTextColorHover('text-gray-300 hover:text-[#001C1C]'); // Hover color for links
    } else {
      setButtonBG('bg-[#AAD468] hover:bg-lime-300');
      setNav('bg-slate-700/20 backdrop-blur-2xl border border-gray-500/50 rounded-full');
      setTextColorMain('text-[#AAD468]'); // Text color for links on other pages
      setTextColorHover('text-gray-300 hover:text-white hover:bg-slate-600/50'); // Hover color for links
    }
  }, [location.pathname, isOurWorkRoute]); // Dependency array: run when path or match changes

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/ourWork" },
    { name: "Our Brand", href: "#" }, // Consider changing '#' to actual routes
    { name: "Our Story", href: "#" }, // Consider changing '#' to actual routes
    { name: "Contact Us", href: "#" }, // Consider changing '#' to actual routes
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="px-4 py-10 lg:px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          {isOurWorkRoute ? (
            <img src={altLogo} alt="Kudos Digital Agency Logo" />
          ) : (
            <img src={logo} alt="Kudos Digital Agency Logo" />
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className={`${nav} px-2 py-2 flex items-center space-x-1`}>
            {navItems.map((item) => {
              // Determine if the link is active
              const isActive = location.pathname === item.href || (item.href === "/ourWork" && isOurWorkRoute);

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? textColorMain // Active link color
                      : textColorHover // Inactive link hover color
                  } ${isActive ? 'bg-slate-600/50' : ''}`} // Add background for active link if desired
                  aria-label={`Maps to ${item.name}`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex items-center space-x-4">
          <Link to={'/joinUs'}>
            <button
              className={`text-[#FEFEFE] ${buttonBG} px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-slate-800`}
              aria-label="Join us today"
            >
              Join us Today
            </button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
               const isActive = location.pathname === item.href || (item.href === "/ourWork" && isOurWorkRoute);

              return (
                <Link // Changed from <a> to <Link>
                  key={item.name}
                  to={item.href} // Changed from href to to
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-slate-600 text-white" // Active mobile link style
                      : "text-gray-300 hover:text-white hover:bg-slate-600/50" // Inactive mobile link style
                  }`}
                  aria-label={`Maps to ${item.name}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;