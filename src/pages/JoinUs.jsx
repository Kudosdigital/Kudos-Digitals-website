import Navbar from "../components/shared/Navbar";
import joinUs from "../assets/Frame 1686560647.webp";
import backgroundImage from "../assets/image 3.webp";
import Perks from "../components/jobboard/Perks";
import { BadgeDollarSignIcon, HeartPulse, Laptop, Boxes } from "lucide-react";
import JobBar from "../components/jobboard/JobBar";
import FooterNew from "../components/shared/FooterNew";
import { jobApplication } from "../components/jobboard/Jobdata";
import BackToTop from "../components/shared/BackToTop";

const JoinUs = () => {
  return (
    <main
      className="relative min-h-screen overflow-x-hidden"
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

      <div className="relative z-20">
        <Navbar />

        <header className="flex flex-col items-center px-5 md:px-14 py-6 lg:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Grow Your Career with Kudos Digitals
          </h1>
          <p className="text-lg md:text-2xl font-semibold mt-5 max-w-4xl">
            We’re always looking for passionate and talented individuals to join
            our remote-first team.
          </p>
          <img
            loading="lazy"
            src={joinUs}
            alt="Illustration of people collaborating remotely"
            className="my-20 w-full max-w-7xl object-contain"
          />
          <h2 className="text-3xl md:text-4xl font-bold">
            Perks of Working with Us
          </h2>
        </header>

        <section
          aria-label="Perks Section"
          className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 px-5 sm:px-10 lg:px-20 py-10"
        >
          <Perks
            icon={<HeartPulse size={40} aria-hidden="true" />}
            header="Health and Well-being"
            content="HMO, paid time off (up to 14 days), and gadget insurance."
          />
          <Perks
            icon={<BadgeDollarSignIcon size={40} aria-hidden="true" />}
            header="Financial"
            content="Competitive salary, stock options, bonuses, salary advances, and rent loans."
          />
          <Perks
            icon={<Laptop size={40} aria-hidden="true" />}
            header="Work-Life Integration"
            content="Flexible work styles including hybrid and remote."
          />
          <Perks
            icon={<Boxes size={40} aria-hidden="true" />}
            header="Professional Development"
            content="Training and upskilling opportunities."
          />
        </section>

        <section
          aria-labelledby="job-opportunities-heading"
          className="text-center px-5 sm:px-10 lg:px-20"
        >
          <h2
            id="job-opportunities-heading"
            className="text-3xl md:text-5xl font-semibold pt-10 sm:py-16"
          >
            Current Job Opportunities
          </h2>
          <div className="space-y-6 md:pb-16">
            {jobApplication.map((job) => (
              <JobBar
                key={job.id}
                title={job.title}
                linkId={`/careers/${job.id}`}
              />
            ))}
          </div>
        </section>

        <FooterNew />
        <BackToTop />
      </div>
    </main>
  );
};

export default JoinUs;
