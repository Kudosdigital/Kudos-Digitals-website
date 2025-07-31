import Navbar from "../components/shared/Navbar";
import Hero from "../components/home/Hero";
import backgroundImage from "../assets/image 3.png";
import CaseStudies from "../components/home/CaseStudies";
import WhyUs from "../components/home/WhyUs";
import Team from "../components/home/Team";
import Footer from "../components/shared/Footer";
import Stats from "../components/home/Stats";
import OurDna from "../components/home/OurDna";
import Testimonials from "../components/home/Testimonials";
import BackToTop from "../components/shared/BackToTop";

const Home = () => {
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

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <CaseStudies />
        <WhyUs />
        <Team />
        <Stats />
        <OurDna />
        <Testimonials />
        <Footer />
      </div>

      <BackToTop />
    </main>
  );
};

export default Home;
