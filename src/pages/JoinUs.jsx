import Navbar from "../components/shared/Navbar";
import joinUs from "../assets/Frame 1686560647.png";
import backgroundImage from "../assets/image 3.png";
import Perks from "../components/jobboard/Perks";
import { BadgeDollarSignIcon, HeartPulse, Laptop, Boxes } from "lucide-react";
import JobBar from "../components/jobboard/JobBar";
import FooterNew from "../components/shared/FooterNew";
import { jobApplication } from "../components/jobboard/Jobdata";
import BackToTop from "../components/shared/BackToTop";

const JoinUs = () => {
  return (
    <main
      className="relative min-h-screen text-[#AAD468] bg-[#001515]/95 bg-blend-multiply"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0  text-[#AAD468] z-0 pointer-events-none"></div>
      <div className="relative z-20 ">
        <Navbar />
        <div className="flex flex-col justify-center items-center px-5 md:px-14 py-20">
          <h2 className="md:text-6xl text-4xl md:text-center font-[800]">
            Grow Your Career with Kudos Digitals
          </h2>
          <p className="md:text-2xl text-lg  font-[600] md:w-[80%] mt-5 md:text-center">
            We’re always looking for passionate and talented individuals to join
            our remote first team
          </p>
          <img
            src={joinUs}
            alt={`join us logo`}
            className="my-28 object-contain"
          />
          <h3 className="text-3xl md:text-4xl text-center font-[700]">
            Perks of Working with us
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2   gap-y-20 pb-10 pt-5 text-[#AAD468]">
        <div>
          <Perks
            icon={<BadgeDollarSignIcon size={40} />}
            header={"Health and Well Being"}
            content={"HMO, Paid time off work up to 14 days, Gadget insurance."}
          />
        </div>
        <div>
          <Perks
            icon={<HeartPulse size={40} />}
            header={"Financial"}
            content={
              "Competitive salary, Stock options, Performance Bonuses, Salary Advance, Rent loans."
            }
          />
        </div>
        <div>
          <Perks
            icon={<Laptop size={40} />}
            header={"Work-Life Integration "}
            content={"Flexible workstyles including hybrid and remote. "}
          />
        </div>
        <div>
          <Perks
            icon={<Boxes size={40} />}
            header={"Professional Development"}
            content={"Trainings and opportunities for skill development"}
          />
        </div>
      </div>

      <div>
        <h2 className=" text-3xl md:text-5xl font-medium text-center py-20">
          Current Job opportunities
        </h2>
        <div className="pb-10">
          {jobApplication.map((title) => {
            return (
              <JobBar
                key={title.id}
                title={title.title}
                linkId={`/joinUs/${title.id}`}
              />
            );
          })}
        </div>
      </div>

      <div>
        <FooterNew />
      </div>

      <BackToTop />
    </main>
  );
};

export default JoinUs;
