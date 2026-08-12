import { useState } from "react";
import Projects from "./Projects";
import useScrollReveal from "../../hooks/useScrollReveal";

const projectData = [
  {
    id: 1,
    category: "DATA ENGINEERING & ML",
    tag: "data",
    title: "Financial Fraud Detection & Prediction Pipeline",
    description:
      "Designed and built an end-to-end data engineering pipeline using AWS S3, Snowflake, and dbt for fraud detection. Processed 6.3M+ transaction records through ETL workflows, data validation, and integrated Scikit-learn models for fraud prediction.",
    tech: ["Snowflake", "AWS S3", "dbt", "Python", "SQL", "Scikit-Learn"],
    link: "https://github.com/sarvesh-ksh/Fraud-Prediction-System",
    featured: true,
  },
  {
    id: 2,
    category: "WEB APPLICATION",
    tag: "web",
    title: "Real-Time Chat Application",
    description:
      "Full-stack real-time messaging platform featuring instant message exchange, user authentication, and online status tracking built with Socket.io.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    link: "https://chat-sarvesh.vercel.app/",
  },
  {
    id: 3,
    category: "DATA ANALYTICS",
    tag: "data",
    title: "Power BI Sales Analytics Dashboard",
    description:
      "Interactive Sales Analytics Dashboard built using a Star Schema data model with 40+ DAX measures (KPIs, Time Intelligence, Top-N). Features 4 dashboards: Sales, Product, Customer, and Employee.",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    link: "https://github.com/sarvesh-ksh/Sales-Analysis",
  },
  {
    id: 4,
    category: "AI / MACHINE LEARNING",
    tag: "ai",
    title: "AI Career Guide for Students",
    description:
      "AI-powered career guidance platform helping students explore 20+ career paths based on interests, skills, and background. Awarded 2nd Prize in a College-Level Hackathon.",
    tech: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/sarvesh-ksh",
  },
  {
    id: 5,
    category: "DATA SCIENCE",
    tag: "data",
    title: "Sales Data Analysis using Python",
    description:
      "Analyzed and cleaned 10,000+ sales records using Pandas and NumPy. Performed Exploratory Data Analysis (EDA) to identify seasonal trends and visualized insights with Matplotlib and Seaborn.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    link: "https://github.com/sarvesh-ksh/DataScienceLearning",
  },
  {
    id: 6,
    category: "MACHINE LEARNING",
    tag: "ai",
    title: "Customer Churn Prediction",
    description:
      "Developed a Random Forest classification model to identify customers at risk of leaving a service. Executed data cleaning, feature engineering, and performance evaluation.",
    tech: ["Python", "Scikit-Learn", "Random Forest", "EDA"],
    link: "https://github.com/sarvesh-ksh",
  },
  {
    id: 7,
    category: "BUSINESS INTELLIGENCE",
    tag: "data",
    title: "Blinkit Operations & Sales Dashboard",
    description:
      "Interactive Power BI dashboard with 10+ KPIs evaluating sales, profit, and inventory metrics across multi-region retail datasets.",
    tech: ["Power BI", "DAX", "Power Query", "KPI Analysis"],
    link: "https://github.com/sarvesh-ksh/Blinkit-Sales-Analysis",
  },
  {
    id: 8,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Saimaya Beauty Parlor Website",
    description:
      "Developed and deployed a responsive landing site improving online visibility, search presence, and client booking engagement.",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    link: "https://saimaya-beauty.vercel.app/",
  },
  {
    id: 9,
    category: "WEB DEVELOPMENT",
    tag: "web",
    title: "Gram Aarogya Sanjivani",
    description:
      "Healthcare awareness platform designed for rural communities. Awarded 2nd Prize in a State-Level Project Exhibition.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/sarvesh-ksh",
  },
  {
    id: 10,
    category: "DATA ANALYSIS",
    tag: "data",
    title: "E-Commerce Data Analysis (Excel)",
    description:
      "Cleaned and transformed 5,000+ rows of raw e-commerce data using Power Query and formulas. Identified top 3 revenue-generating categories with Pivot Tables.",
    tech: ["Advanced Excel", "Power Query", "Pivot Tables"],
    link: "https://github.com/sarvesh-ksh/DataScienceLearning",
  },
  {
    id: 11,
    category: "DATABASE SYSTEMS",
    tag: "data",
    title: "Student Database Management System",
    description:
      "Designed a structured MySQL relational database for managing student records. Wrote 15+ complex SQL queries (joins, views, aggregations) for efficient data retrieval.",
    tech: ["MySQL", "SQL", "Database Design", "Relational Models"],
    link: "https://github.com/sarvesh-ksh",
  },
];

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Web Dev", value: "web" },
  { label: "Data & Cloud", value: "data" },
  { label: "AI & ML", value: "ai" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const sectionRef = useScrollReveal();

  const filteredProjects =
    activeFilter === "all"
      ? projectData
      : projectData.filter((p) => p.tag === activeFilter);

  const featuredProject =
    filteredProjects.find((p) => p.featured) ||
    (activeFilter === "all" ? filteredProjects[0] : null);
  const gridProjects = featuredProject
    ? filteredProjects.filter((p) => p.id !== featuredProject.id)
    : filteredProjects;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="content px-4 sm:px-6 py-16 md:py-24"
      aria-label="Projects section"
    >
      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Projects</p>
        <h2 className="section-title">Selected Engineering Projects</h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Full-stack web applications, end-to-end data pipelines, predictive
          machine learning models, and analytics dashboards built from Sarvesh's
          engineering work.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scroll-reveal">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === filter.value
                ? "bg-accent text-white"
                : "bg-bg-secondary text-text-secondary border border-border hover:text-text-primary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Featured Card */}
      {featuredProject && (
        <div className="mb-6 scroll-reveal">
          <Projects data={featuredProject} isFeatured={true} />
        </div>
      )}

      {/* Grid Cards */}
      {gridProjects.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridProjects.map((project, index) => (
            <div
              key={project.id}
              className={`scroll-reveal stagger-${(index % 3) + 1}`}
            >
              <Projects data={project} />
            </div>
          ))}
        </div>
      )}

      {/* GitHub CTA */}
      <div className="mt-12 text-center scroll-reveal">
        <a
          href="https://github.com/sarvesh-ksh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          View All Repositories on GitHub
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
