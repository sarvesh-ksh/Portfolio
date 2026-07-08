import { useState, useEffect, useRef } from "react";
import Projects from "./Projects";
import useScrollReveal from "../../hooks/useScrollReveal";

const projectData = [
  {
    id: 1,
    category: "WEB APP",
    tag: "web",
    title: "Real-time Chat App",
    description:
      "A full-stack web chatting application featuring real-time messaging, typing indicators, and user authentication.",
    link: "https://chat-sarvesh.vercel.app/",
  },
  {
    id: 2,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Saimaya Beauty Parlour",
    description:
      "A responsive, professional beauty business website with detailed services listing and interactive components.",
    link: "https://saimaya-beauty.vercel.app/",
  },
  {
    id: 3,
    category: "DATA ANALYSIS",
    tag: "data",
    title: "Sales Analysis",
    description:
      "A PowerBI project for Sales Analysis, turning raw business data into interactive, creative, and actionable visuals.",
    link: "https://github.com/sarvesh-ksh/Sales-Analysis",
  },
  {
    id: 4,
    category: "DATA ENGINEERING",
    tag: "data",
    title: "Snowflake Project",
    description:
      "A database project building and structuring data warehouses and storage pipelines with Snowflake and Python.",
    link: "https://github.com/sarvesh-ksh/SnowFlake-project",
  },
  {
    id: 5,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Personal Portfolio",
    description:
      "Source code of this responsive portfolio website showcasing computer engineering projects, achievements, and skills.",
    link: "https://github.com/sarvesh-ksh/Portfolio",
  },
  {
    id: 6,
    category: "DATA ANALYSIS",
    tag: "data",
    title: "Blinkit Data Analysis",
    description:
      "Data analysis project using PowerBI to explore sales and operational metrics for Blinkit.",
    link: "https://github.com/sarvesh-ksh/Blinkit-Sales-Analysis",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Data Science", value: "ai" },
  { label: "Data Analysis", value: "data" },
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
          Built 10+ projects across Web Development, Data Science, and Data Analysis —
          focused on solving real-world problems with clean code and insights.
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