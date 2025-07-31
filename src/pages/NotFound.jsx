import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e1e1e] via-[#2a2a2a] to-[#1e1e1e] px-4 py-12">
      <div className="text-center max-w-xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-xl">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-white mb-6">
          404
        </h1>
        <p className="text-white text-lg sm:text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#AAD468] hover:bg-[#93bf5f] transition-all duration-300 text-[#0E0E0E] font-semibold py-3 px-6 rounded-full"
        >
          <ArrowLeft size={18} />
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
