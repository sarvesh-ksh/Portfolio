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
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 xl:gap-16">

        {/* ── LEFT: Photo + Socials ── */}
        <div className="flex-shrink-0 flex flex-col items-center lg:items-start scroll-reveal-left">
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

        {/* ── RIGHT: Resume Details ── */}
        <div className="w-full scroll-reveal-right max-lg:text-center">

          <p className="section-label mb-2">About Me</p>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-tight">
            Computer Engineering Student &amp; Developer
          </h2>

          <div className="mt-4 space-y-3 text-sm text-text-secondary leading-relaxed max-w-2xl max-lg:mx-auto">
            <p>
              I am currently pursuing my <strong>B.E. in Computer Engineering at Savitribai Phule Pune University (SPPU)</strong> in Pune, Maharashtra, maintaining a <strong>9.29 CGPA</strong>. Prior to my degree, I completed my <strong>Diploma in Computer Engineering from MSBTE</strong> in Nashik with <strong>82.11%</strong>.
            </p>
            <p>
              My expertise covers full-stack web development (React.js, Node.js, Express.js, MongoDB, MySQL), data analytics (Power BI, DAX, Excel, Pandas, NumPy), and cloud/data engineering pipelines (AWS, Snowflake, dbt).
            </p>
          </div>

          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 max-w-xl max-lg:mx-auto text-left">
            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Location</p>
              <p className="text-xs text-text-primary font-medium mt-0.5">Pune, Maharashtra</p>
            </div>

            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Email</p>
              <a href="mailto:sarveshkshatriya545@gmail.com" className="text-xs text-accent hover:underline font-medium mt-0.5 block truncate">
                sarveshkshatriya545@gmail.com
              </a>
            </div>

            <div className="card p-3">
              <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">Languages</p>
              <p className="text-xs text-text-primary font-medium mt-0.5">English, Hindi, Marathi</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-7 max-lg:justify-center">
            <ScrollLink
              to="portfolio"
              smooth
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
