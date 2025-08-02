import Navbar from "../../components/shared/Navbar";
import Footer from "../shared/Footer";
import BackToTop from "../shared/BackToTop";
import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/image 3.png";
import { ArrowLeft, User, UserCircle } from "lucide-react";

const Articles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  // Mock data for demonstration - replace with your actual data
  const mockAuthor = {
    name: "Kudos Digitals",
  };

  const mockTags = [
    "Apple vision pro",
    "Spatial UI",
    "UX Design",
    "visionOS",
    "AR/VR",
    "Immersive Technology",
  ];

  const mockRelatedPosts = [
    {
      id: 1,
      date: "July 18, 2025",
      title: "The Kudos Story by Kudos Digitals",
      description:
        "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
      image: article.image,
    },
    {
      id: 2,
      date: "July 18, 2025",
      title: "The Kudos Story by Kudos Digitals",
      description:
        "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
      image: article.image,
    },
    {
      id: 3,
      date: "July 18, 2025",
      title: "The Kudos Story by Kudos Digitals",
      description:
        "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
      image: article.image,
    },
  ];

  if (!article) {
    return (
      <div className="text-white text-center py-20">
        <p>No article selected. Please go back and choose one.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-lime-600 hover:bg-lime-700 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            title
          )}&url=${encodeURIComponent(url)}`
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`
        );
        break;
      default:
        break;
    }
  };

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

      <header className="relative z-10">
        <Navbar />
        <div className="py-6 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:underline mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#AAD468]">
            Published on {article.date}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#AAD468] mb-8">
            {article.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6">
            <UserCircle className="w-8 h-8" />
            <span className="text-white">Written by {mockAuthor.name}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {mockTags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#AAD468] text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        {/* Article Image */}
        <img
          src={article.image}
          alt={article.title}
          className="rounded-3xl w-full mb-8 object-cover h-80"
        />

        {/* Article Body */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {article.description}
          </p>

          {/* Additional content paragraphs - replace with actual article content */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Designers are now facing a radical shift from flat interfaces to 3D
            spatial interactions that rely on eye tracking, hand gestures, and
            voice input. Unlike traditional mobile or desktop UX patterns,
            visionOS introduces floating windows, responsive UI scaling, and
            intuitive gesture controls—removing the need for physical input
            devices entirely.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            As "infinite canvas computing," where apps are no longer confined to
            screens but live within the user's physical space. Users can place
            apps side-by-side in mid-air, scale content based on proximity, and
            navigate environments with just their eyes and fingers.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            "We are entering a new dimension of user experience," said Mike
            Rockwell, VP of Apple's Technology Development Group. "With
            visionOS, interaction is no longer about control panels or buttons,
            but about natural and intuitive immersion."
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            The move comes as competitors like Meta and Samsung continue to
            develop their own extended reality (XR) platforms. However, Apple's
            developer ecosystem, premium hardware, and design-first approach may
            give it a critical edge in the mixed reality race.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Early testers and designers have praised the responsiveness of eye
            tracking and the realism of spatial UI. However, concerns remain
            around accessibility, app compatibility, and the learning curve for
            new users and developers.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            As Apple continues to roll out updates and expand access to its
            Vision Pro SDK, design professionals are urged to start learning
            spatial UX principles. From 3D interface modeling to voice-gesture
            fusion, the future of UI design may no longer be flat.
          </p>
        </div>

        {/* Share Section */}
        <div className="border-t border-gray-700 pt-8 mb-12">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Share:</span>
            <div className="flex gap-3">
              <button
                onClick={() => handleShare("facebook")}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Share on Facebook"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Share on Twitter"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button
                onClick={() => handleShare("linkedin")}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Share on LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
              <button
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Copy link"
                onClick={() =>
                  navigator.clipboard.writeText(window.location.href)
                }
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto">
        <h2 className="text-[#AAD468] text-3xl font-bold mb-8">
          Related Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRelatedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer"
              onClick={() =>
                navigate("/articles", { state: { article: post } })
              }
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-[#AAD468] text-sm font-medium">
                  {post.date}
                </time>
                <h3 className="text-white text-xl font-bold mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {post.description}
                </p>
                <button className="mt-4 text-[#AAD468] font-medium hover:underline">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
};

export default Articles;
