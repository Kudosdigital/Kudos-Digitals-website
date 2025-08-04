import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { client } from "../lib/sanity";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import BackToTop from "../components/shared/BackToTop";
import AppLoader from "../components/shared/AppLoader";
import backgroundImage from "../assets/image 3.webp";
import { ArrowLeft, UserCircle } from "lucide-react";
import toast from "react-hot-toast";

const Articles = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [article, setArticle] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const fetchData = async () => {
      const fetchedArticle = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          mainImage{asset->{url}},
          tags,
          body,
          extendedBody
        }`,
        { slug: id }
      );
      setArticle(fetchedArticle);

      const fetchedRelatedArticle = await client.fetch(
        `*[_type == "post" && slug.current != $slug]{
          title,
          slug,
          publishedAt,
          description,
          mainImage{asset->{url}}
        } | order(publishedAt desc)[0...3]`,
        { slug: id }
      );
      setRelatedPosts(fetchedRelatedArticle);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) return <AppLoader message="Loading article..." />;

  if (!article) {
    return (
      <main
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#001515]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="text-[#AAD468] space-y-6 mt-24">
          <h1 className="text-4xl font-bold">Oops! Article not found.</h1>
          <p className="text-lg opacity-80 max-w-md">
            The post you’re looking for might have been removed or doesn't
            exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-lime-600 text-white px-6 py-3 rounded-md hover:bg-lime-700 transition"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article.title;

    const confirm = window.confirm(
      "You’re about to be redirected to share this article."
    );
    if (!confirm) return;

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

    toast.success("Opening share window...");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
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
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#001515", opacity: 0.85 }}
      ></div>

      <header className="relative z-10">
        <Navbar />
        <div className="py-6 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white hover:underline mb-6"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
          <p className="mt-4 text-lg sm:text-xl font-medium text-[#AAD468]">
            Published on {new Date(article.publishedAt).toDateString()}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-[#AAD468] mb-8">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <UserCircle className="w-8 h-8" />
            <span className="text-white">Written by Kudos Digitals</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {article.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-[#AAD468] text-black px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="relative z-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <PortableText value={article.body} />
          {article.mainImage?.asset?.url && (
            <img
              src={article.mainImage.asset.url}
              alt={article.title}
              className="rounded-3xl w-full my-10 object-cover h-80"
            />
          )}
          <PortableText value={article.extendedBody} />
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
                onClick={handleCopyLink}
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Copy link"
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
          {relatedPosts.map((post, i) => (
            <article
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/articles/${post.slug.current}`)}
            >
              <img
                src={post.mainImage?.asset?.url}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-[#AAD468] text-sm font-medium">
                  {new Date(post.publishedAt).toDateString()}
                </time>
                <h3 className="text-white text-xl font-bold mt-2 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {post.description || "Continue reading..."}
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
