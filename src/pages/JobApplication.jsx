import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { jobApplication } from "../components/jobboard/Jobdata";
import { useRef, useState } from "react";
import { Plus } from "lucide-react";
import FooterNew from "../components/shared/FooterNew";
import backgroundImage from "../assets/bg.png";
import emailjs from "@emailjs/browser";
import BackToTop from "../components/shared/BackToTop";

const JobApplication = () => {
  const [fileName, setFileName] = useState(null);
  const [fileName2, setFileName2] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // To disable button during submission
  const [submissionStatus, setSubmissionStatus] = useState(null); // For success/error messages

  const { id } = useParams();
  const job = jobApplication.find((j) => j.id === id);

  const form = useRef(); // Ref for the form to send directly to EmailJS

  if (!job) {
    return <div className="text-white p-10">Job not found.</div>;
  }

  const inputRef = useRef(null); // Ref for CV file input
  const inputRef2 = useRef(null); // Ref for Cover Letter file input

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        setFileName(file.name);
      } else {
        setFileName(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClick2 = () => {
    inputRef2.current?.click(); // Corrected: use inputRef2
  };

  const handleChange2 = (e) => {
    try {
      const file = e.target.files[0];
      if (file) {
        setFileName2(file.name);
      } else {
        setFileName2(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null); // Clear previous status

    // Replace with your actual Service ID, Template ID, and Public Key
    const serviceId = "YOUR_EMAILJS_SERVICE_ID";
    const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
    const publicKey = "YOUR_EMAILJS_PUBLIC_KEY"; // Found under Integration tab in EmailJS dashboard

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
        setSubmissionStatus("success");
        setIsSubmitting(false);
        form.current.reset(); // Reset the form fields
        setFileName(null);
        setFileName2(null);
      },
      (error) => {
        console.error("Email sending failed:", error.text);
        setSubmissionStatus("error");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className="bg-[#001515] text-[#AAD468]">
      <div className="bg-[#042727ec]">
        <Navbar />
      </div>
      <div className="">
        <div className="lg:px-20 px-5">
          <h2 className="text-center md:text-5xl text-3xl font-bold my-10">
            Job Application
          </h2>
          <h2 className="py-5 md:text-4xl text-2xl font-medium">Job Role</h2>
          <p className="md:text-2xl text-lg text-white"> {job.title}</p>
          <h2 className="py-5 md:text-4xl text-2xl font-medium">
            Job Description
          </h2>
          <p className="md:text-2xl text-lg text-white"> {job.description}</p>
          <h2 className="py-5 md:text-4xl text-2xl font-medium">
            Job Requirements:
          </h2>
          <p className="md:text-2xl text-lg text-white"> {job.requirement}</p>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="py-10 lg:px-20 px-5"
        >
          <input type="hidden" name="job_title" value={job.title} />{" "}
          {/* Hidden field for job title */}
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
            <label className="text-[#aad468] font-semibold mr-2 text-xl">
              Full Name:
            </label>
            <input
              type="text"
              name="full_name"
              className="bg-transparent text-white outline-none min-w-[60%]"
              required
            />
          </div>
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
            <label className="text-[#aad468] font-semibold mr-2 text-xl">
              Email:
            </label>
            <input
              type="email"
              name="applicant_email"
              className="bg-transparent text-white outline-none min-w-[60%]"
              required
            />
          </div>
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
            <label className="text-[#aad468] font-semibold mr-2 text-xl">
              Phone Number:
            </label>
            <input
              type="tel"
              name="phone_number"
              className="bg-transparent text-white outline-none"
              required
            />
          </div>
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
            <label className="text-[#aad468] font-semibold mr-2 text-xl">
              LinkedIn Profile URL(Optional):
            </label>
            <input
              type="url"
              name="linkedin_profile"
              className="bg-transparent text-white outline-none min-w-[60%]"
            />
          </div>
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 flex items-center">
            <label className="text-[#aad468] font-semibold mr-2 text-xl">
              Portfolio Link:
            </label>
            <input
              type="url"
              name="portfolio_link"
              className="bg-transparent text-white outline-none min-w-[60%]"
            />
          </div>
          {/* Cover Letter - Changed to textarea for direct text input */}
          <div className="w-full bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500">
            <div className="flex items-center">
              <label className="text-[#aad468] font-semibold mr-2 text-xl">
                Cover Letter (Optional):
              </label>
              {/* If you want to allow file upload for cover letter instead, uncomment the below and modify EmailJS template */}
              {/* <p className="text-white text-lg">{fileName2}</p> */}
            </div>
            <textarea
              name="cover_letter" // Name for EmailJS
              rows={4}
              className="w-full bg-transparent text-white outline-none p-2"
              placeholder="Type your cover letter here..."
            />
            {/* If you want to allow file upload for cover letter instead, uncomment the below and modify EmailJS template */}
            {/*
                        <button
                            type="button"
                            onClick={handleClick2}
                            className="w-[120px] items-center flex h-[50px] px-5 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner shadow-[#00000040] text-[#001515] text-lg font-medium mt-2"
                        >
                            <Plus /> <p> Upload</p>
                        </button>
                        <input
                            type="file"
                            ref={inputRef2}
                            className="hidden"
                            onChange={handleChange2}
                            name="cover_letter_file" // Name must match parameter in EmailJS template
                        />
                        */}
          </div>
          {/* CV Upload */}
          <div className="w-full flex justify-between bg-gradient-to-br from-[#1b2b2b] to-[#2c3c3c] rounded-xl px-4 my-5 py-2 border border-gray-500 items-center">
            <div className="flex items-center">
              <label className="text-[#aad468] font-semibold mr-2 text-xl">
                CV Upload:
              </label>
              <p className="text-white text-lg">{fileName}</p>
            </div>
            <button
              type="button"
              onClick={handleClick}
              className="w-[120px] items-center flex h-[50px] px-5 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner shadow-[#00000040] text-[#001515] text-lg font-medium"
            >
              <Plus /> <p> Upload</p>
            </button>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              onChange={handleChange}
              name="cv_file" // Name must match parameter in EmailJS template
              accept=".pdf,.doc,.docx" // Accept only common document types
              required
            />
          </div>
          <div className="flex justify-center mt-20">
            <button
              type="submit"
              className="h-[50px] px-5 my-20 rounded-[10px] border border-[#D0D0D0]/10 bg-[#aad468] shadow-inner shadow-[#00000040] text-[#001515] text-lg font-medium"
              disabled={isSubmitting} // Disable button during submission
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

        <div
          className="flex justify-center items-center h-96 py-10 flex-col"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="md:text-7xl text-4xl text-center my-5 font-medium">
            Your idea deserves to be heard.
          </h2>
          <button
            type="button"
            className="py-5 my-10 px-5 rounded-sm text-2xl border border-[#D0D0D0]/10 bg-[#B3FF3C] shadow-inner shadow-[#00000040] text-[#001515] font-medium"
          >
            Share your idea
          </button>
        </div>

        <div>
          <FooterNew />
        </div>

        <BackToTop />
      </div>
    </div>
  );
};

export default JobApplication;
