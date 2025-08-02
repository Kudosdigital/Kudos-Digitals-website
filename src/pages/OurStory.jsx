import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { gsap } from "gsap";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import VR from "../assets/VR.webp";
import art from "../assets/art.webp";
import figma from "../assets/figma.webp";
import BackToTop from "../components/shared/BackToTop";
import backgroundImage from "../assets/image 3.webp";
import article_image from "../assets/team.webp";

const OurStory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const articlesRef = useRef(null);
  const filterRef = useRef(null);
  const navigate = useNavigate();

  const handleReadMore = (article) => {
    navigate("/articles", { state: { article } });
  };

  // Sample articles data - replace with your actual data
  const articles = [
    {
      id: 1,
      title: "The Kudos Story",
      description:
        "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
      date: "July 18 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 2,
      title: "Design Trends 2025",
      description:
        "Exploring the latest design trends that will shape the digital landscape",
      date: "July 15 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 3,
      title: "UX Best Practices",
      description: "Essential UX principles every designer should know",
      date: "July 12 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 4,
      title: "Brand Identity Essentials",
      description: "How to create a memorable brand identity that stands out",
      date: "July 10 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 5,
      title: "Digital Marketing Strategies",
      description: "Effective strategies to boost your online presence",
      date: "July 8 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 6,
      title: "Mobile First Design",
      description: "Why mobile-first approach is crucial in 2025",
      date: "July 5 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 7,
      title: "Color Psychology in Design",
      description: "Understanding how colors affect user behavior",
      date: "July 3 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 8,
      title: "Typography Trends",
      description: "The latest typography trends in modern design",
      date: "July 1 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 9,
      title: "Web Development Best Practices",
      description: "Essential practices for modern web development",
      date: "June 28 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 10,
      title: "Social Media Design Guide",
      description: "Creating engaging visuals for social media platforms",
      date: "June 25 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 11,
      title: "E-commerce Design Principles",
      description: "Key principles for designing successful e-commerce sites",
      date: "June 22 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 12,
      title: "Animation in Web Design",
      description: "How to use animations effectively in web design",
      date: "June 20 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 13,
      title: "Accessibility in Design",
      description: "Making your designs accessible to everyone",
      date: "June 18 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 14,
      title: "SEO for Designers",
      description: "How design decisions impact search engine optimization",
      date: "June 15 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
    {
      id: 15,
      title: "Future of Web Design",
      description: "Predictions for the future of web design and development",
      date: "June 12 2025",
      author: "Kudos Digitals",
      image: article_image,
    },
  ];

  const featuredArticles = [
    {
      id: "f1",
      title: "Immersive Experiences in VR",
      description:
        "Discover how virtual reality is transforming the future of design, education, and storytelling.",
      date: "July 30 2025",
      author: "Kudos Digitals",
      image: VR,
    },
    {
      id: "f2",
      title: "Trending Fonts in Modern Design",
      description:
        "Explore the top font styles gaining traction in 2025 and how they shape brand identity.",
      date: "July 28 2025",
      author: "Kudos Digitals",
      image: art,
    },
    {
      id: "f3",
      title: "Essential Figma Plugins for Designers",
      description:
        "Level up your Figma workflow with these must-have plugins used by top design teams.",
      date: "July 25 2025",
      author: "Kudos Digitals",
      image: figma,
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Handle articles per page change
  const handleArticlesPerPageChange = (newCount) => {
    setArticlesPerPage(newCount);
    setCurrentPage(1);
    setShowFilterDropdown(false);
  };

  // Animation effects
  useEffect(() => {
    if (articlesRef.current) {
      gsap.fromTo(
        articlesRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [currentPage, articlesPerPage]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <main
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#001515",
          opacity: 0.85,
        }}
      ></div>

      <header className="relative">
        <Navbar />
        <div className="border-b border-[#99999966] mx-auto max-w-fit py-6 md:py-20 px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#AAD468]">
            Insights, Trends and Inspirations from Kudos Digitals
          </h1>
          <p className="mt-4 text-lg sm:text-xl font-medium max-w-3xl mx-auto text-[#AAD468]">
            Dive into our blog for the latest in design, development and digital
            transformation
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Large Card */}
          <div className="md:col-span-2 h-[605px] relative rounded-3xl overflow-hidden shadow-lg group">
            <img
              loading="lazy"
              src={featuredArticles[0].image}
              alt={featuredArticles[0].title}
              className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
              <p className="text-white text-sm mb-1">
                {featuredArticles[0].date}
              </p>
              <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                {featuredArticles[0].title}
              </h2>
              <button
                onClick={() => handleReadMore(featuredArticles[0])}
                className="mt-4 bg-lime-600 text-white text-sm font-semibold px-4 py-2 rounded-md w-fit hover:bg-lime-700 transition ms-auto"
              >
                Read More...
              </button>
            </div>
          </div>

          {/* Right Side Two Cards */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[294px]">
              <img
                loading="lazy"
                src={featuredArticles[1].image}
                alt={featuredArticles[1].title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white text-sm mb-1">
                  {featuredArticles[1].date}
                </p>
                <h3 className="text-white text-lg font-semibold leading-snug">
                  {featuredArticles[1].title}
                </h3>
                <button
                  onClick={() => handleReadMore(featuredArticles[1])}
                  className="mt-2 bg-lime-600 text-white text-sm font-semibold px-3 py-1.5 rounded-md w-fit hover:bg-lime-700 transition ms-auto"
                >
                  Read More...
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group h-[294px]">
              <img
                loading="lazy"
                src={featuredArticles[2].image}
                alt={featuredArticles[2].title}
                className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                <p className="text-white text-sm mb-1">
                  {featuredArticles[2].date}
                </p>
                <h3 className="text-white text-lg font-semibold leading-snug">
                  {featuredArticles[2].title}
                </h3>
                <button
                  onClick={() => handleReadMore(featuredArticles[2])}
                  className="mt-2 bg-lime-600 text-white text-sm font-semibold px-3 py-1.5 rounded-md w-fit hover:bg-lime-700 transition ms-auto"
                >
                  Read More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Articles Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header with Filter */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#AAD468]">
              Latest Articles
            </h2>

            {/* Filter Dropdown */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                aria-label="Filter articles per page"
                aria-expanded={showFilterDropdown}
                aria-haspopup="true"
              >
                <Filter className="w-4 h-4" />
                <span>Show {articlesPerPage}</span>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showFilterDropdown ? "rotate-90" : ""
                  }`}
                />
              </button>

              {showFilterDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-slate-800 border border-white/20 rounded-lg shadow-lg z-20 min-w-[120px]">
                  {[6, 12, 15].map((count) => (
                    <button
                      key={count}
                      onClick={() => handleArticlesPerPageChange(count)}
                      className={`w-full text-left px-4 py-2 hover:bg-white/10 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                        articlesPerPage === count
                          ? "bg-lime-400/20 text-[#AAD468]"
                          : "text-white"
                      }`}
                    >
                      Show {count}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Articles Grid */}
          <div
            ref={articlesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            role="region"
            aria-label="Latest articles"
          >
            {currentArticles.map((article, index) => (
              <article
                key={article.id}
                className="relative rounded-3xl overflow-hidden shadow-lg group bg-[#001C1C] flex flex-col"
              >
                <img
                  loading="lazy"
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 sm:h-52 object-cover transition-transform group-hover:scale-105 duration-500 flex-shrink-0"
                />
                <div className="p-4 sm:p-6 flex-1 flex flex-col min-h-[200px]">
                  <div className="flex-1 mb-4">
                    <time className="text-gray-400 text-sm mb-2 block">
                      {article.date}
                    </time>
                    <h3 className="text-[#AAD468] text-lg sm:text-xl font-bold mb-2 leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-gray-400 text-xs sm:text-sm">
                      by {article.author}
                    </span>
                    <button
                      onClick={() => handleReadMore(article)}
                      className="bg-lime-600 hover:bg-lime-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-400/50 flex-shrink-0"
                    >
                      Read More...
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            aria-label="Articles pagination"
          >
            <div className="text-gray-400 text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, articles.length)} of{" "}
              {articles.length} articles
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                aria-label="Go to previous page"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // Show first page, last page, current page, and pages around current
                    const showPage =
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1);

                    const showEllipsis =
                      (page === currentPage - 2 && currentPage > 3) ||
                      (page === currentPage + 2 &&
                        currentPage < totalPages - 2);

                    if (showEllipsis) {
                      return (
                        <span key={page} className="text-gray-400 px-2">
                          ...
                        </span>
                      );
                    }

                    if (!showPage) return null;

                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-10 h-10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50 ${
                          currentPage === page
                            ? "bg-lime-400 text-slate-900 font-bold"
                            : "bg-white/10 hover:bg-white/20 text-white"
                        }`}
                        aria-label={`Go to page ${page}`}
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </button>
                    );
                  }
                )}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                aria-label="Go to next page"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
};

export default OurStory;
