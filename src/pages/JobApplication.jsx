// File: src/pages/JobApplication.jsx

import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { jobApplication } from "../components/jobboard/Jobdata";
import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import Footer from "../components/shared/Footer";
import backgroundImage from "../assets/image 3.webp";
import emailjs from "@emailjs/browser";
import BackToTop from "../components/shared/BackToTop";
import ShareModal from "../components/shared/ShareModal";

const JobApplication = () => {
  const [fileName, setFileName] = useState(null);
  const [fileName2, setFileName2] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const { id } = useParams();
  const job = jobApplication.find((j) => j.id === id);

  const form = useRef();

  if (!job) {
    return <div className="text-white p-10">Job not found.</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const handleClick = () => inputRef.current?.click();
  const handleClick2 = () => inputRef2.current?.click();

  const handleChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : null);
  };

  const handleChange2 = (e) => {
    const file = e.target.files[0];
    setFileName2(file ? file.name : null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const serviceId = "YOUR_EMAILJS_SERVICE_ID";
    const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
    const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        setSubmissionStatus("success");
        setIsSubmitting(false);
        form.current.reset();
        setFileName(null);
        setFileName2(null);
      },
      () => {
        setSubmissionStatus("error");
        setIsSubmitting(false);
      }
    );
  };

  const handleShareModalOpen = () => {
    setIsShareModalOpen(true);
  };

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
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: "#001515", opacity: 0.85 }}
      ></div>

      <Navbar />
      <div className="relative z-20">
        <div className="lg:px-20 px-5 max-w-6xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold my-10">
            Job Application
          </h2>
          <section aria-labelledby="job-role">
            <h2 id="job-role" className="py-5 text-2xl md:text-3xl font-medium">
              Job Role
            </h2>
            <p className="text-lg md:text-xl text-white">{job.title}</p>
          </section>
          <section aria-labelledby="job-description">
            <h2
              id="job-description"
              className="py-5 text-2xl md:text-3xl font-medium"
            >
              Job Description
            </h2>
            <p className="text-lg md:text-xl text-white">{job.description}</p>
          </section>
          <section aria-labelledby="job-requirements">
            <h2
              id="job-requirements"
              className="py-5 text-2xl md:text-3xl font-medium"
            >
              Job Requirements:
            </h2>
            <p className="text-lg md:text-xl text-white">{job.requirement}</p>
          </section>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="py-10 lg:px-20 px-5 max-w-6xl mx-auto"
        >
          <input type="hidden" name="job_title" value={job.title} />

          <div className="flex flex-col sm:flex-row items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-2">
            <label
              htmlFor="full_name"
              className="text-[#aad468] font-semibold text-lg sm:w-40"
            >
              Full Name:
            </label>
            <input
              id="full_name"
              type="text"
              name="full_name"
              className="flex-1 bg-transparent text-white outline-none w-full"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-2">
            <label
              htmlFor="email"
              className="text-[#aad468] font-semibold text-lg sm:w-40"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              name="applicant_email"
              className="flex-1 bg-transparent text-white outline-none w-full"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-2">
            <label
              htmlFor="phone"
              className="text-[#aad468] font-semibold text-lg sm:w-40"
            >
              Phone Number:
            </label>
            <input
              id="phone"
              type="tel"
              name="phone_number"
              className="flex-1 bg-transparent text-white outline-none w-full"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-2">
            <label
              htmlFor="linkedin"
              className="text-[#aad468] font-semibold text-lg sm:w-40"
            >
              LinkedIn Profile URL:
            </label>
            <input
              id="linkedin"
              type="url"
              name="linkedin_profile"
              className="flex-1 bg-transparent text-white outline-none w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-2">
            <label
              htmlFor="portfolio"
              className="text-[#aad468] font-semibold text-lg sm:w-40"
            >
              Portfolio Link:
            </label>
            <input
              id="portfolio"
              type="url"
              name="portfolio_link"
              className="flex-1 bg-transparent text-white outline-none w-full"
            />
          </div>

          <div className="bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500">
            <label
              htmlFor="cover_letter"
              className="text-[#aad468] font-semibold text-lg block mb-2"
            >
              Cover Letter (Optional):
            </label>
            <textarea
              id="cover_letter"
              name="cover_letter"
              rows={4}
              className="w-full bg-transparent text-white outline-none p-2"
              placeholder="Type your cover letter here..."
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 py-3 my-4 border border-gray-500 gap-3">
            <div className="flex items-center gap-2">
              <label
                htmlFor="cv_upload"
                className="text-[#aad468] font-semibold text-lg"
              >
                CV Upload:
              </label>
              <p className="text-white text-sm">{fileName}</p>
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="flex items-center gap-1 px-4 py-2 rounded-md border border-[#D0D0D0]/10 bg-[#aad468] text-[#001515] font-medium"
            >
              <Plus className="w-4 h-4" /> Upload
            </button>
            <input
              id="cv_upload"
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleChange}
              name="cv_file"
              accept=".pdf,.doc,.docx"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="h-[50px] w-full md:w-fit px-5 mt-5 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner text-[#001515] text-lg font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </div>

          {submissionStatus === "success" && (
            <p className="text-green-500 text-center text-xl mt-4">
              Application submitted successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 text-center text-xl mt-4">
              Failed to submit application. Please try again.
            </p>
          )}
        </form>

        <div className="py-10 lg:py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#AAD468] mb-10 sm:mb-14 leading-tight">
              Your idea deserves
              <br />
              to be heard.
            </h2>
            <button
              onClick={handleShareModalOpen}
              className="bg-lime-400 hover:bg-lime-300 text-slate-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-lime-400/50"
            >
              Share your idea
            </button>
          </div>
        </div>

        <ShareModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />

        <Footer />
        <BackToTop />
      </div>
    </main>
  );
};

export default JobApplication;
