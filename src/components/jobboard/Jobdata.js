const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const jobApplication = [
  {
    title: "Senior UI/UX Designer",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
  {
    title: "Front-end Engineer",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
  {
    title: "Back-end Engineer",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
  {
    title: "Graphic Designer",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
  {
    title: "Software Engineer",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
  {
    title: "DevOps",
    description:
      "User Research & Analysis, UX Strategy and Planning, Information Architecture and wireframing, High fidelity UI Design, Prototyping and Interaction Design, Cross-Functional Collaboration, Design System Management, Continous Improvement ",
    requirement:
      "Proficiency in Design tools like Figma, User centered design principles, Wireframes, Prototypes,  High-Fidelity mockups, Responsive design and Design Systems",
  },
].map((job) => ({
  ...job,
  id: job.title
    ? slugify(job.title)
    : `job-${Math.random().toString(36).slice(2, 10)}`,
}));
