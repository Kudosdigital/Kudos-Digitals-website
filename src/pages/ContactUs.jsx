import { useEffect, useState } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import backgroundImage from "../assets/image 3.webp";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    isNotRobot: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subjectOptions = [
    "Project inquiry",
    "General Inquiry",
    "Partnership",
    "Other",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        isNotRobot: false,
      });
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Let's Build Something{" "}
              <span className="text-[#AAD468] relative">
                Amazing
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#AAD468] rounded-full transform scale-x-110"></div>
              </span>{" "}
              Together
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get in touch with Kudos Digital for inquiries, consultations, or
              just to say hello
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name*"
                    className={`w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 rounded-xl text-white placeholder-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm ${
                      errors.name
                        ? "border-red-500"
                        : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                    }`}
                    required
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    className={`w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 rounded-xl text-white placeholder-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm ${
                      errors.email
                        ? "border-red-500"
                        : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                    }`}
                    required
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number*"
                  className={`w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 rounded-xl text-white placeholder-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm ${
                    errors.phone
                      ? "border-red-500"
                      : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                  }`}
                  required
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="sr-only">
                  Company Name (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company name (Optional)"
                  className="w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 border-[#2A4A4A] rounded-xl text-white placeholder-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:border-[#AAD468]/50"
                />
              </div>

              {/* Subject Dropdown */}
              <div>
                <label htmlFor="subject" className="sr-only">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer ${
                      errors.subject
                        ? "border-red-500"
                        : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                    } ${formData.subject ? "" : "text-[#AAD468]"}`}
                    required
                    aria-describedby={
                      errors.subject ? "subject-error" : undefined
                    }
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    {subjectOptions.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className=" bg-[#1A3A3A]"
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-[#AAD468]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.subject && (
                  <p
                    id="subject-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message*"
                  className={`w-full px-6 py-4 bg-[#1A3A3A]/50 border-2 rounded-xl text-white placeholder-[#AAD468] focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-vertical min-h-[120px] ${
                    errors.message
                      ? "border-red-500"
                      : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                  }`}
                  required
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-red-400"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Robot Checkbox */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="isNotRobot"
                    name="isNotRobot"
                    checked={formData.isNotRobot}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 border-2 rounded cursor-pointer transition-all duration-200 ${
                      formData.isNotRobot
                        ? "bg-[#AAD468] border-[#AAD468]"
                        : "border-[#2A4A4A] hover:border-[#AAD468]/50"
                    }`}
                    onClick={() =>
                      handleInputChange({
                        target: {
                          name: "isNotRobot",
                          type: "checkbox",
                          checked: !formData.isNotRobot,
                        },
                      })
                    }
                  >
                    {formData.isNotRobot && (
                      <svg
                        className="w-3 h-3 text-[#0A1F1F] mt-0.5 ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <label
                  htmlFor="isNotRobot"
                  className="text-[#AAD468] text-sm cursor-pointer"
                >
                  I'm not a robot (Optional)
                </label>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full md:w-auto mx-auto flex justify-center items-center text-center px-8 py-4 bg-[#AAD468] text-[#0A1F1F] font-semibold rounded-xl hover:bg-[#9BC55A] focus:outline-none focus:ring-4 focus:ring-[#AAD468]/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0A1F1F]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ContactUs;
