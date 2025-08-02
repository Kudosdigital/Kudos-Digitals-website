import { Link } from "react-router-dom";

const JobBar = ({ title, linkId }) => {
  return (
    <article
      className="bg-[#FEFEFE99] rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-5 sm:px-10 py-5 sm:py-8 mx-5 lg:mx-20 my-5 shadow-sm"
      role="group"
      aria-labelledby={`job-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="text-start">
        <h3
          id={`job-title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-black text-lg sm:text-xl lg:text-2xl font-semibold underline"
        >
          {title}
        </h3>
        <p className="text-[#494949] text-sm sm:text-base lg:text-lg font-medium mt-1">
          Remote / Full Time
        </p>
      </div>

      <Link
        to={linkId}
        className="inline-block w-full sm:w-fit px-4 sm:px-6 py-2 rounded-lg bg-[#ABD468] text-black font-semibold text-sm sm:text-base hover:bg-[#c3e27c] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ABD468]"
        aria-label={`Apply now for ${title}`}
      >
        Apply Now
      </Link>
    </article>
  );
};

export default JobBar;
