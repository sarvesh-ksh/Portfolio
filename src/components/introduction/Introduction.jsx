import person from "../../assets/images/person2.webp";
import useScrollReveal from "../../hooks/useScrollReveal";
import { Link as ScrollLink } from "react-scroll";
import { RESUME_PATH } from "../../constants/resume";

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

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
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
      <div className="w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT CONTENT ── */}
          <div className="w-full lg:max-w-[58%] scroll-reveal-left">

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bg-secondary border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-text-secondary font-medium">Available for opportunities</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.08] tracking-tight mb-4">
              Sarvesh Kshatriya
            </h1>

            {/* Role subtitle */}
            <h2 className="text-lg sm:text-xl font-display font-semibold text-accent mb-4">
              Data Engineer &amp; Software Developer
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-xl mb-8">
              Computer Engineering student building end-to-end data pipelines, analytics systems,
              machine learning workflows, and modern web applications. Focused on scalable architectures
              and turning raw data into reliable, production-ready systems.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap gap-3 mt-8">
              <ScrollLink
                to="portfolio"
                smooth
                duration={800}
                offset={-80}
                className="btn-primary cursor-pointer"
                aria-label="View projects"
              >
                View Projects
                <ArrowIcon />
              </ScrollLink>

              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="View resume in a new tab"
              >
                View Resume
                <ExternalLinkIcon />
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex flex-wrap items-center gap-3 mt-5">
              <a
                href="https://github.com/sarvesh-ksh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
                GitHub
              </a>
              <span className="text-border text-xs">·</span>
              <a
                href="https://www.linkedin.com/in/kshatriya-sarvesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>

            {/* Tech strip */}
            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-muted">
              <span className="font-semibold text-text-secondary">Stack:</span>
              <span>Python</span>
              <span>·</span>
              <span>SQL</span>
              <span>·</span>
              <span>Snowflake</span>
              <span>·</span>
              <span>dbt</span>
              <span>·</span>
              <span>AWS</span>
              <span>·</span>
              <span>React</span>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[33%] max-lg:mx-auto scroll-reveal-right">
            <div className="relative rounded-xl overflow-hidden border border-border aspect-[4/5] bg-bg-secondary">
              <img
                src={person}
                alt="Sarvesh Kshatriya — Data Engineer & Software Developer"
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
