import VR from "../../assets/VR.webp";
import art from "../../assets/art.webp";
import figma from "../../assets/figma.webp";
import article_image from "../../assets/team.webp";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const articles = [
  {
    title: "The Kudos Story",
    description:
      "We are Kudos Digitals Agency, a full-service design agency based in Lagos, Nigeria",
    date: "July 18 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Design Trends 2025",
    description:
      "Exploring the latest design trends that will shape the digital landscape",
    date: "July 15 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "UX Best Practices",
    description: "Essential UX principles every designer should know",
    date: "July 12 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Brand Identity Essentials",
    description: "How to create a memorable brand identity that stands out",
    date: "July 10 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Digital Marketing Strategies",
    description: "Effective strategies to boost your online presence",
    date: "July 8 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Mobile First Design",
    description: "Why mobile-first approach is crucial in 2025",
    date: "July 5 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Color Psychology in Design",
    description: "Understanding how colors affect user behavior",
    date: "July 3 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Typography Trends",
    description: "The latest typography trends in modern design",
    date: "July 1 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Web Development Best Practices",
    description: "Essential practices for modern web development",
    date: "June 28 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Social Media Design Guide",
    description: "Creating engaging visuals for social media platforms",
    date: "June 25 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "E-commerce Design Principles",
    description: "Key principles for designing successful e-commerce sites",
    date: "June 22 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Animation in Web Design",
    description: "How to use animations effectively in web design",
    date: "June 20 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Accessibility in Design",
    description: "Making your designs accessible to everyone",
    date: "June 18 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "SEO for Designers",
    description: "How design decisions impact search engine optimization",
    date: "June 15 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
  {
    title: "Future of Web Design",
    description: "Predictions for the future of web design and development",
    date: "June 12 2025",
    author: "Kudos Digitals",
    image: article_image,
  },
].map((article) => ({
  ...article,
  id: article.title ? slugify(article.title) : `article-${Math.random()}`,
}));

export const featuredArticles = [
  {
    title: "Immersive Experiences in VR",
    description:
      "Discover how virtual reality is transforming the future of design, education, and storytelling.",
    date: "July 30 2025",
    author: "Kudos Digitals",
    image: VR,
  },
  {
    title: "Trending Fonts in Modern Design",
    description:
      "Explore the top font styles gaining traction in 2025 and how they shape brand identity.",
    date: "July 28 2025",
    author: "Kudos Digitals",
    image: art,
  },
  {
    title: "Essential Figma Plugins for Designers",
    description:
      "Level up your Figma workflow with these must-have plugins used by top design teams.",
    date: "July 25 2025",
    author: "Kudos Digitals",
    image: figma,
  },
].map((article) => ({
  ...article,
  id: article.title ? slugify(article.title) : `article-${Math.random()}`,
}));
