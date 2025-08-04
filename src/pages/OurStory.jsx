// src/pages/OurStory.jsx

import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../lib/sanity";
import { gsap } from "gsap";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import BackToTop from "../components/shared/BackToTop";
import backgroundImage from "../assets/image 3.webp";
import AppLoader from "../components/shared/AppLoader";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";

const OurStory = () => {
  const [featured, setFeatured] = useState([]);
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(6);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const articlesRef = useRef(null);
  const filterRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const query = `*[_type == "post"]|order(publishedAt desc){
      title,
      slug,
      publishedAt,
      body,
      mainImage{asset->{url}},
      featured
    }`;

    const fetchData = async () => {
      try {
        const data = await client.fetch(query);
        setFeatured(data.filter((p) => p.featured));
        setArticles(data.filter((p) => !p.featured));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, []);

  function getPlainText(blocks, wordLimit = 40) {
    if (!Array.isArray(blocks)) return "";
    const fullText = blocks
      .map((block) =>
        block._type === "block" && Array.isArray(block.children)
          ? block.children.map((child) => child.text).join(" ")
          : ""
      )
      .join(" ")
      .trim();

    return fullText.split(" ").slice(0, wordLimit).join(" ") + "...";
  }

  const handleReadMore = (article) => {
    navigate(`/articles/${article.slug.current}`);
  };

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = articles.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleArticlesPerPageChange = (count) => {
    setArticlesPerPage(count);
    setCurrentPage(1);
    setShowFilterDropdown(false);
  };

  useEffect(() => {
    if (articlesRef.current) {
      gsap.fromTo(
        articlesRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [currentPage, articlesPerPage]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <AppLoader message="Loading articles..." />;

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
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#001515", opacity: 0.85 }}
      ></div>

      <Navbar />

      <header className="relative">
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

      <div className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-[605px] relative rounded-3xl overflow-hidden shadow-lg group">
            {featured[0] && (
              <>
                <img
                  src={featured[0].mainImage.asset.url}
                  alt={featured[0].title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-white text-sm mb-1">
                    {new Date(featured[0].publishedAt).toDateString()}
                  </p>
                  <h2 className="text-white text-2xl sm:text-3xl font-semibold leading-snug">
                    {featured[0].title}
                  </h2>
                  <button
                    onClick={() => handleReadMore(featured[0])}
                    className="mt-4 bg-lime-600 text-white text-sm font-semibold px-4 py-2 rounded-md w-fit hover:bg-lime-700 transition ms-auto"
                  >
                    Read More...
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col gap-6">
            {[1, 2].map(
              (i) =>
                featured[i] && (
                  <div
                    key={i}
                    className="relative rounded-3xl overflow-hidden shadow-lg group h-[294px]"
                  >
                    <img
                      src={featured[i].mainImage.asset.url}
                      alt={featured[i].title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 flex flex-col justify-end">
                      <p className="text-white text-sm mb-1">
                        {new Date(featured[i].publishedAt).toDateString()}
                      </p>
                      <h3 className="text-white text-lg font-semibold leading-snug">
                        {featured[i].title}
                      </h3>
                      <button
                        onClick={() => handleReadMore(featured[i])}
                        className="mt-2 bg-lime-600 text-white text-sm font-semibold px-3 py-1.5 rounded-md w-fit hover:bg-lime-700 transition ms-auto"
                      >
                        Read More...
                      </button>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#AAD468]">
              Latest Articles
            </h2>

            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
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

          <div
            ref={articlesRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {currentArticles.map((article, i) => (
              <article
                key={i}
                className="relative rounded-3xl overflow-hidden shadow-lg group bg-[#001C1C] flex flex-col"
              >
                <img
                  src={article.mainImage.asset.url}
                  alt={article.title}
                  className="w-full h-48 sm:h-52 object-cover transition-transform group-hover:scale-105 duration-500 flex-shrink-0"
                />
                <div className="p-4 sm:p-6 flex-1 flex flex-col min-h-[200px]">
                  <div className="flex-1 mb-4">
                    <time className="text-gray-400 text-sm mb-2 block">
                      {new Date(article.publishedAt).toDateString()}
                    </time>
                    <h3 className="text-[#AAD468] text-lg sm:text-xl font-bold mb-2 leading-tight line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {getPlainText(article.body)}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-gray-400 text-xs sm:text-sm">
                      by Kudos Digitals
                    </span>
                    <button
                      onClick={() => handleReadMore(article)}
                      className="bg-lime-600 hover:bg-lime-700 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
                    >
                      Read More...
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <nav className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, articles.length)} of{" "}
              {articles.length} articles
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-lime-400/50"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
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
