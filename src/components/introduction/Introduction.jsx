import person from "../../assets/images/person2.webp";
import useScrollReveal from "../../hooks/useScrollReveal";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const Introduction = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      ref={sectionRef}
      id="introduction"
      className="relative min-h-[90vh] flex items-center px-4 sm:px-6"
      aria-label="Hero section"
    >
      <div className="content w-full pt-28 pb-16 relative z-10">
        <div className="flex max-lg:flex-col-reverse items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT CONTENT ── */}
          <div className="w-full lg:max-w-[58%] flex flex-col max-lg:items-center max-lg:text-center scroll-reveal-left">

            {/* Sub-header badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-border bg-bg-secondary mb-6 text-xs text-text-secondary font-mono">
              Computer Engineering Student &bull; SPPU, Pune
            </div>

            {/* Heading */}
            <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] tracking-tight">
              Sarvesh Kshatriya
            </h1>

            <p className="text-base sm:text-lg text-accent-highlight font-semibold mt-2">
              Full-Stack Web Developer &amp; Data Scientist / Data Engineer
            </p>

            {/* Resume Summary */}
            <p className="mt-5 text-sm sm:text-base text-text-secondary font-normal leading-relaxed max-w-xl">
              Experienced in developing full-stack web applications, analytics dashboards, database-driven systems, and cloud-based data engineering solutions using React.js, Node.js, Python, SQL, Snowflake, dbt, Power BI, and AWS.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/sarvesh-ksh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kshatriya-sarvesh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>

            {/* Quick Skills summary strip */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
              <span className="font-semibold text-text-secondary">Core Tech:</span>
              <span>React.js</span>
              <span>&bull;</span>
              <span>Node.js</span>
              <span>&bull;</span>
              <span>Python</span>
              <span>&bull;</span>
              <span>SQL</span>
              <span>&bull;</span>
              <span>Snowflake</span>
              <span>&bull;</span>
              <span>Power BI</span>
              <span>&bull;</span>
              <span>AWS</span>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[34%] max-lg:mx-auto scroll-reveal-right">
            <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/5] bg-bg-secondary">
              <img
                src={person}
                alt="Sarvesh Kshatriya"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Introduction;
