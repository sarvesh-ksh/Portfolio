import person from "../../assets/images/person.webp";
import { Link as ScrollLink } from "react-scroll";
import SocialMedia from "../common/socialMedia/SocialMedia";
import useScrollReveal from "../../hooks/useScrollReveal";

const Profile = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="px-4 sm:px-6 py-16 md:py-24"
      aria-label="About section"
    >
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-20">

        {/* ── LEFT: Photo + Socials ── */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-start scroll-reveal-left mx-auto lg:mx-0">
          <div className="relative w-48 sm:w-56 lg:w-60 rounded-xl overflow-hidden border border-border bg-bg-secondary">
            <img
              src={person}
              alt="Sarvesh Kshatriya"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="mt-4">
            <SocialMedia />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="w-full scroll-reveal-right max-lg:text-center">

          <p className="section-label mb-2">About Me</p>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
            Building Systems That Turn Data Into Decisions
          </h2>

          <div className="mt-5 space-y-4 text-sm text-text-secondary leading-relaxed max-w-2xl max-lg:mx-auto">
            <p>
              I&apos;m a Computer Engineering student at{" "}
              <strong className="text-text-primary">Savitribai Phule Pune University (SPPU)</strong>{" "}
              with a current CGPA of{" "}
              <strong className="text-text-primary">9.19</strong>.
              My work sits at the intersection of data engineering and software development —
              I build pipelines that move and transform data at scale, and the applications
              that put that data to practical use.
            </p>
            <p>
              On the data side I work with Python, SQL, Snowflake, dbt, and AWS S3 to build
              ETL/ELT workflows and data warehouse models. I&apos;m comfortable working across
              the full layer — from raw ingestion through transformation, modeling,
              feature engineering, and into ML or BI tooling like Power BI.
            </p>
            <p>
              On the software side I&apos;ve built full-stack web applications using React,
              Node.js, Express, and MongoDB. I&apos;m interested in work where both of these
              areas connect — systems where good engineering on the data side directly
              produces something useful.
            </p>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-7 max-w-xl max-lg:mx-auto text-left">
            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Degree</p>
              <p className="text-xs text-text-primary font-medium mt-0.5">B.E. Computer Engineering</p>
            </div>
            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">CGPA</p>
              <p className="text-xs text-text-primary font-medium mt-0.5">9.19 / 10</p>
            </div>
            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Location</p>
              <p className="text-xs text-text-primary font-medium mt-0.5">Pune, Maharashtra</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 mt-7 max-lg:justify-center">
            <ScrollLink
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-80}
              className="btn-primary cursor-pointer"
              aria-label="View projects"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </ScrollLink>

            <a
              href="https://www.linkedin.com/in/kshatriya-sarvesh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              aria-label="View LinkedIn profile"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
