import useScrollReveal from "../../hooks/useScrollReveal";

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

/* ── Architecture Flow — lightweight CSS-only diagram ── */
const ArchitectureFlow = () => {
  const steps = [
    { label: "Data Source", sublabel: "Transactions" },
    { label: "AWS S3", sublabel: "Raw storage" },
    { label: "Snowflake", sublabel: "RAW layer" },
    { label: "dbt Silver", sublabel: "Cleaned & validated" },
    { label: "dbt Gold", sublabel: "Aggregated models" },
    { label: "Python / ML", sublabel: "Feature eng. + Scikit-learn" },
    { label: "Power BI", sublabel: "Fraud dashboard" },
  ];

  return (
    <div className="mt-6 mb-2" aria-label="Pipeline architecture diagram">
      <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">Pipeline Architecture</p>
      <div className="flex flex-wrap items-center gap-1">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-1">
            <div className="arch-node">
              <span className="arch-label">{step.label}</span>
              <span className="arch-sublabel">{step.sublabel}</span>
            </div>
            {i < steps.length - 1 && (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-text-muted flex-shrink-0" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Featured project card ── */
const FeaturedProjectCard = ({ project }) => (
  <article className="card p-6 sm:p-8 border-l-2 border-l-accent">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
      <span className="badge-accent">{project.category}</span>
      <span className="text-[11px] font-mono text-accent uppercase tracking-wider font-semibold">Flagship Project</span>
    </div>

    <h3 className="text-text-primary text-xl sm:text-2xl font-display font-bold mb-3 leading-tight">
      {project.title}
    </h3>

    <p className="text-text-secondary text-sm leading-relaxed">
      {project.description}
    </p>

    <ArchitectureFlow />

    <div className="flex flex-wrap gap-1.5 my-5">
      {project.tech.map((t) => (
        <span key={t} className="skill-chip">{t}</span>
      ))}
    </div>

    {project.scale && (
      <div className="flex items-center gap-2 py-3 px-4 bg-bg-secondary rounded border border-border mb-5">
        <span className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Scale:</span>
        <span className="text-sm text-text-primary font-medium">{project.scale}</span>
      </div>
    )}

    <div className="pt-4 border-t border-border flex flex-wrap items-center gap-3">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-secondary text-xs"
        aria-label={`View ${project.title} source code on GitHub`}
      >
        View Source Code
        <ExternalLinkIcon />
      </a>
    </div>
  </article>
);

/* ── Regular project card ── */
const ProjectCard = ({ project }) => {
  const hasLink = project.link && project.link !== "#!";
  const isGitHub = hasLink && project.link.includes("github");

  return (
    <article className="card p-5 flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="badge-accent">{project.category}</span>
        </div>

        <h3 className="text-text-primary text-[15px] font-display font-semibold mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-text-secondary text-xs leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      <div>
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="skill-chip text-[11px] px-2 py-0.5">{t}</span>
          ))}
        </div>

        {hasLink && (
          <div className="pt-3 border-t border-border">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors font-medium"
              aria-label={`${isGitHub ? "View source code" : "View live demo"} for ${project.title}`}
            >
              {isGitHub ? "View Source" : "Live Demo"}
              <ExternalLinkIcon />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

/* ── Project data — curated 4 ── */
const featuredProject = {
  id: 1,
  category: "Data Engineering & ML",
  title: "Financial Fraud Detection & Prediction Pipeline",
  description:
    "Built an end-to-end data engineering and machine learning pipeline to process 6.3M+ financial transactions. The system ingests raw CSV data into AWS S3, loads it into Snowflake, and runs two-stage dbt transformations (Silver for cleaning and validation, Gold for aggregated analytical models). Python handles feature engineering on the Gold layer, and a Scikit-learn classification model identifies fraudulent patterns. Final results are visualized in a Power BI fraud dashboard.",
  tech: ["Python", "SQL", "AWS S3", "Snowflake", "dbt", "Scikit-learn", "Power BI"],
  scale: "6.3M+ transaction records",
  link: "https://github.com/sarvesh-ksh/Fraud-Prediction-System",
};

const gridProjects = [
  {
    id: 2,
    category: "AI / Machine Learning",
    title: "AI Student Career Guidance",
    description:
      "Built an AI-powered platform that helps students explore career paths based on their interests, skills, and academic background. Covers 20+ career domains with tailored guidance. Awarded 2nd Place at a college-level hackathon (2025).",
    tech: ["Python", "Machine Learning", "HTML", "CSS", "JavaScript"],
    link: "https://github.com/sarvesh-ksh",
  },
  {
    id: 3,
    category: "Data Analytics",
    title: "Power BI Sales Analytics Dashboard",
    description:
      "Designed a multi-dashboard sales analytics report using a Star Schema data model. Built 40+ DAX measures covering KPIs, time intelligence (YTD, MoM), and Top-N analysis. Delivered four dashboards: Sales Overview, Product Performance, Customer Analysis, and Employee Metrics.",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    link: "https://github.com/sarvesh-ksh/Sales-Analysis",
  },
  {
    id: 4,
    category: "Data Science",
    title: "Sales Data Analysis",
    description:
      "Analyzed 10,000+ sales records using Pandas and NumPy to clean and reshape the data, then conducted EDA to identify seasonal trends, top-performing products, and revenue patterns. Visualized findings using Matplotlib and Seaborn.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    link: "https://github.com/sarvesh-ksh/DataScienceLearning",
  },
];

/* ── Section ── */
const Portfolio = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="content px-4 sm:px-6 py-16 md:py-24"
      aria-label="Projects section"
    >
      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Work</p>
        <h2 className="section-title">Selected Projects</h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Data engineering pipelines, machine learning models, analytics dashboards,
          and full-stack applications built from real engineering work.
        </p>
      </div>

      {/* Featured */}
      <div className="mb-6 scroll-reveal">
        <FeaturedProjectCard project={featuredProject} />
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gridProjects.map((project, index) => (
          <div key={project.id} className={`scroll-reveal stagger-${(index % 3) + 1}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-12 text-center scroll-reveal">
        <a
          href="https://github.com/sarvesh-ksh?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
          aria-label="View all repositories on GitHub"
        >
          View All Repositories on GitHub
          <ExternalLinkIcon />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
