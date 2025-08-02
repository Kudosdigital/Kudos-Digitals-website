import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ShareModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    projectType: "",
    consultationDate: "",
    projectIdea: "",
  });

  const [errors, setErrors] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const projectTypes = [
    "UI/UX Design",
    "Web Development",
    "Event Branding",
    "Brand Identity",
    "MVP Design & Development",
    "Graphic Design",
    "Other",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Project type is required";
    }

    if (!formData.projectIdea.trim()) {
      newErrors.projectIdea = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);

      // Reset form
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        projectType: "",
        consultationDate: "",
        projectIdea: "",
      });

      // Close modal
      onClose();

      // You can add success notification here
      alert("Thank you! We'll get back to you soon.");
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
      companyName: "",
      projectType: "",
      consultationDate: "",
      projectIdea: "",
    });
    setErrors({});
    setShowDatePicker(false);
    setSelectedDate(null);
    onClose();
  };

  // Date picker functions
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const handleDateSelect = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    setSelectedDate(date);
    const formattedDate = date.toISOString().split("T")[0];
    setFormData((prev) => ({
      ...prev,
      consultationDate: formattedDate,
    }));
  };

  const handleDatePickerDone = () => {
    setShowDatePicker(false);
  };

  const navigateMonth = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month's trailing days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevMonth, prevYear);

    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <button
          key={`prev-${daysInPrevMonth - i}`}
          className="w-12 h-12 rounded-xl text-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => {
            setCurrentMonth(prevMonth);
            setCurrentYear(prevYear);
            handleDateSelect(daysInPrevMonth - i);
          }}
        >
          {daysInPrevMonth - i}
        </button>
      );
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected =
        selectedDate &&
        selectedDate.getDate() === day &&
        selectedDate.getMonth() === currentMonth &&
        selectedDate.getFullYear() === currentYear;

      const isToday =
        new Date().getDate() === day &&
        new Date().getMonth() === currentMonth &&
        new Date().getFullYear() === currentYear;

      days.push(
        <button
          key={day}
          className={`w-12 h-12 rounded-xl transition-colors cursor-pointer ${
            isSelected
              ? "bg-[#AAD468] text-black font-bold"
              : isToday
              ? "bg-[#AAD468]/20 text-[#AAD468] font-bold"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </button>
      );
    }

    // Next month's leading days
    const totalCells = 42; // 6 rows × 7 days
    const remainingCells = totalCells - days.length;
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;

    for (let day = 1; day <= remainingCells; day++) {
      days.push(
        <button
          key={`next-${day}`}
          className="w-12 h-12 rounded-xl text-gray-400 hover:bg-gray-100 transition-colors cursor-pointer"
          onClick={() => {
            setCurrentMonth(nextMonth);
            setCurrentYear(nextYear);
            handleDateSelect(day);
          }}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-2xl flex items-center justify-center z-[9999] p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[#AAD468]">
            Share your Idea with Us !
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold cursor-pointer"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto p-6 flex-1 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name{" "}
                <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors"
                placeholder="Enter your company name"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Project Type
              </label>
              <div className="relative">
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors appearance-none bg-white ${
                    errors.projectType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectType}
                </p>
              )}
            </div>

            {/* Preferred Consultation Date */}
            <div className="relative">
              <label
                htmlFor="consultationDate"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Preferred Consultation Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="consultationDate"
                  name="consultationDate"
                  value={selectedDate ? selectedDate.toLocaleDateString() : ""}
                  readOnly
                  onClick={() => setShowDatePicker(true)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors cursor-pointer"
                  placeholder="Select a date"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Custom Date Picker */}
              {showDatePicker && (
                <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white border border-gray-200 rounded-3xl shadow-lg p-6">
                  {/* Calendar Header */}
                  <div className="flex items-center justify-between mb-6">
                    <button
                      type="button"
                      onClick={() => navigateMonth("prev")}
                      className="w-10 h-10 rounded-full bg-[#AAD468]/20 hover:bg-[#AAD468]/30 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>

                    <div className="text-center">
                      <div className="text-gray-500 text-sm">{currentYear}</div>
                      <div className="text-xl font-bold text-gray-800">
                        {months[currentMonth]}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => navigateMonth("next")}
                      className="w-10 h-10 rounded-full bg-[#AAD468]/20 hover:bg-[#AAD468]/30 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>

                  {/* Days of Week Header */}
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {daysOfWeek.map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-gray-500 py-2"
                      >
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-6">
                    {renderCalendar()}
                  </div>

                  {/* Done Button */}
                  <button
                    type="button"
                    onClick={handleDatePickerDone}
                    className="w-full bg-[#AAD468] hover:bg-[#9BC555] text-black font-bold py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Project Idea Description */}
          <div>
            <label
              htmlFor="projectIdea"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Briefly describe your project idea
            </label>
            <textarea
              id="projectIdea"
              name="projectIdea"
              value={formData.projectIdea}
              onChange={handleInputChange}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#AAD468] focus:border-transparent outline-none transition-colors resize-vertical ${
                errors.projectIdea ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Tell us about your project idea, goals, requirements, or any specific details you'd like to share..."
            />
            {errors.projectIdea && (
              <p className="text-red-500 text-sm mt-1">{errors.projectIdea}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="bg-[#AAD468] hover:bg-[#9BC555] text-black font-bold py-3 px-12 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#AAD468] focus:ring-offset-2 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareModal;
