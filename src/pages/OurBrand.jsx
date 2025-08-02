import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import team from "../assets/team.webp";
import team2 from "../assets/team2.webp";
import { Briefcase, Layout, Globe, Brush, Code, Rocket } from "lucide-react";
import BackToTop from "../components/shared/BackToTop";
import TeamCarousel from "../components/ourbrand/TeamCarousel";
import ShareModal from "../components/shared/ShareModal";
import { useNavigate } from "react-router";

const services = [
  {
    title: "Event Branding",
    icon: <Briefcase className="w-5 h-5 text-[#001C1C]" />,
    description:
      "We develop distinctive branding systems for conferences, launches, and experiences covering event logos, signage, stage design assets...",
  },
  {
    title: "Brand Identity Development",
    icon: <Brush className="w-5 h-5 text-[#001C1C]" />,
    description:
      "We craft cohesive brand identities that resonate, including logo design, typography...",
  },
  {
    title: "Graphic Designs",
    icon: <Globe className="w-5 h-5 text-[#001C1C]" />,
    description:
      "Our graphic design services cover a broad spectrum, including custom illustrations, social media content design...",
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-5 h-5 text-[#001C1C]" />,
    description:
      "We specialize in designing user-centric digital experiences that are intuitive, efficient.",
  },
  {
    title: "Website Design (No-Code – WordPress)",
    icon: <Code className="w-5 h-5 text-[#001C1C]" />,
    description:
      "We build high-performance websites using no-code tools like WordPress ensuring fast deployment, responsive design.",
  },
  {
    title: "MVP Design & Development",
    icon: <Rocket className="w-5 h-5 text-[#001C1C]" />,
    description:
      "We offer rapid design and development of MVPs that are functional, scalable, and investor-ready.",
  },
];

const OurBrand = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const navigate = useNavigate();


  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <main className="text-[#001C1C]">
        <header className="bg-[#FAFEF3]">
          <Navbar className="bg-[#FAFEF3]" />
          <div className="py-6 md:py-20 px-4 sm:px-6 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              Kudos Story!
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-[#656565] max-w-3xl mx-auto">
              Discover who we are, what we do, and the passion that drives us.
            </p>
          </div>
        </header>

        {/* Who We Are Section */}
        <section
          aria-labelledby="who-we-are"
          className="py-10 md:py-20 px-4 sm:px-6 bg-[#F9F9F9]"
        >
          <h2
            id="who-we-are"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16"
          >
            Who We Are
          </h2>
          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 items-center">
            <img
              loading="lazy"
              src={team}
              alt="Kudos team at work"
              className="w-full md:w-[540px] md:h-[500px] object-cover rounded-2xl shadow-lg shadow-[#4d4d4d]"
            />
            <div className="space-y-6 md:text-lg leading-relaxed md:w-1/2 text-center md:text-start">
              <p>
                We are Kudos Digitals Agency, a full-service design agency based
                in Lagos, Nigeria, with a talented remote team across the
                nation.
              </p>
              <p>
                We are innovators, problem-solvers, and digital architects
                dedicated to transforming businesses.
              </p>
            </div>
          </div>
        </section>

        {/* Our Ideal Clients Section */}
        <section
          aria-labelledby="ideal-clients"
          className="py-10 md:py-20 px-4 sm:px-6 bg-[#FFFFFF]"
        >
          <h2
            id="ideal-clients"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-16"
          >
            Our Ideal Clients
          </h2>
          <div className="flex flex-col-reverse md:flex-row max-w-7xl mx-auto gap-10 items-center">
            <div className="space-y-6 md:text-lg leading-relaxed md:w-1/2 text-center md:text-start">
              <p>
                We work with visionaries, startups, growing businesses, and
                established brands ready to take bold steps in digital
                transformation.
              </p>
              <button
                onClick={handleShareModalOpen}
                className="px-8 py-3 rounded-lg bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A] transition cursor-pointer"
              >
                Share Your Idea
              </button>
            </div>
            <img
              loading="lazy"
              src={team2}
              alt="Kudos team collaborating"
              className="w-full md:w-[540px] md:h-[500px] object-cover rounded-2xl shadow-lg shadow-[#4d4d4d]"
            />
          </div>
        </section>

        {/* Our Services Section */}
        <section
          aria-labelledby="our-services"
          className="py-14 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F9F9F9]"
        >
          <h2
            id="our-services"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-[#001C1C] mb-20"
          >
            Our Services
          </h2>

          {/* Grid layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {services.map(({ title, icon, description }) => (
              <article
                key={title}
                className="bg-white rounded-2xl shadow-lg shadow-[#4d4d4d]/70 p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl min-h-[280px]"
              >
                <header className="flex items-start justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#001C1C] underline">
                    {title}
                  </h3>
                  <div className="bg-[#C6E29A] p-2 rounded-full">{icon}</div>
                </header>
                <p className="text-[#333] text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#001C1C]">
              Your idea deserves to be heard.
            </h3>
            <button onClick={() => navigate("/contact-us")} className="mt-2 px-6 py-3 bg-[#001C1C] hover:bg-[#262727] text-[#C6E29A] text-base sm:text-lg rounded-lg transition cursor-pointer">
              Talk to us today
            </button>
          </div>
        </section>

        {/* Meet our Team Section */}
        <section
          aria-labelledby="our-services"
          className="py-14 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6FCE8]"
        >
          <h2
            id="our-services"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-[#001C1C] mb-10"
          >
            Meet our <span className="text-[#79974A]">Team</span>
          </h2>
          <p className="text-lg sm:text-xl font-medium text-[#656565] max-w-3xl mx-auto text-center">
            Meet the Minds Behind Kudos Digitals. Where innovation meets
            execution, one project at a time.
          </p>

          <TeamCarousel />
        </section>

        <Footer />
        <BackToTop />
      </main>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </>
  );
};

export default OurBrand;
