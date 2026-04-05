import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import useScrollReveal from "../../hooks/useScrollReveal";

const projectData = [
  {
    id: 1,
    category: "DATA ENGINEERING",
    tag: "data",
    title: "Snowflake Data Pipeline",
    description:
      "Built a scalable data pipeline using Snowflake, DBT, AWS, and Jinja SQL for transforming and managing large datasets.",
    link: "#!",
  },
  {
    id: 2,
    category: "WEB SECURITY",
    tag: "ai",
    title: "Phishing URL Detector",
    description:
      "Detects malicious URLs using machine learning and rule-based analysis for enhanced web security.",
    link: "#!",
  },
  {
    id: 3,
    category: "WEB APP",
    tag: "web",
    title: "Real-time Chat App",
    description:
      "A full-stack chat app with real-time messaging, typing indicators, and online/offline user status.",
    link: "https://chat-sarvesh.vercel.app",
  },
  {
    id: 4,
    category: "AI PROJECT",
    tag: "ai",
    title: "AI Resume Analyzer",
    description:
      "Analyzes resumes using AI to provide insights, suggestions, and improve candidate profiles.",
    link: "#!",
  },
  {
    id: 5,
    category: "WEB APP",
    tag: "web",
    title: "AI for Student",
    description:
      "An AI-powered platform to assist students with learning, productivity, and smart recommendations.",
    link: "#!",
  },
  {
    id: 6,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Beauty Parlour Website",
    description:
      "A professional website for a beauty business with service listings and customer interaction features.",
    link: "https://saimaya.42web.io",
  },
  {
    id: 7,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Gram Aarogya Sanjivani",
    description:
      "A healthcare-focused website designed for rural communities with simple and accessible UI.",
    link: "#!",
  },
  {
    id: 8,
    category: "DASHBOARD",
    tag: "data",
    title: "Blinkit Dashboard",
    description:
      "A data visualization dashboard inspired by Blinkit to track orders, users, and analytics.",
    link: "#!",
  },
  {
    id: 9,
    category: "DASHBOARD",
    tag: "data",
    title: "E-commerce Dashboard",
    description:
      "An analytics dashboard to monitor sales, revenue, and user behavior in an e-commerce system.",
    link: "#!",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Data", value: "data" },
  { label: "AI / ML", value: "ai" },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll reveal for header
  const headerRef = useScrollReveal();

  // Intersection observer for the whole section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const filteredProjects =
    activeFilter === "all"
      ? projectData
      : projectData.filter((p) => p.tag === activeFilter);

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <div
      ref={sectionRef}
      className="content mt-12 md:mt-16 xl:mt-24 mb-12 md:mb-24 px-4"
      id="portfolio"
    >
      {/* Header */}
      <div ref={headerRef} className="mb-12 text-center max-w-2xl mx-auto scroll-reveal">
        <p className="section-title">
          My <span className="text-gradient">Projects</span>
        </p>
        <p className="text-text-secondary text-sm md:text-base mt-4 leading-relaxed">
          Built 10+ projects across AI, Web Development, and Data Engineering —
          focused on solving real-world problems with clean and scalable design.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className={`flex justify-center gap-2 mb-10 flex-wrap transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ transitionDelay: "0.1s" }}
      >
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => {
              setActiveFilter(filter.value);
              setShowAll(false);
            }}
            className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeFilter === filter.value
                ? "bg-accent text-white shadow-lg shadow-accent/30"
                : "bg-white/5 text-text-secondary border border-white/10 hover:bg-white/10 hover:text-text-primary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        {visibleProjects.map((data, index) => (
          <div
            key={data.id}
            className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
          >
            <Projects data={data} index={index} />
          </div>
        ))}
      </div>

      {/* Empty state */}
      {visibleProjects.length === 0 && (
        <div className="text-center py-16 text-text-muted">
          <p className="text-4xl mb-4">🔍</p>
          <p>No projects found in this category.</p>
        </div>
      )}

      {/* Button */}
      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-7 py-3 rounded-xl text-sm font-semibold cursor-pointer
              bg-white/5 border border-white/10 text-text-secondary
              hover:bg-accent hover:text-white hover:border-accent
              hover:shadow-lg hover:shadow-accent/30
              transition-all duration-300"
          >
            {showAll ? "Show Less" : "View All Projects"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;