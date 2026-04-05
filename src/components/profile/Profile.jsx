import person from "../../assets/images/person.webp";
import { Link as ScrollLink } from "react-scroll";
import SocialMedia from "../common/socialMedia/SocialMedia";
import useScrollReveal from "../../hooks/useScrollReveal";
import useTilt3D from "../../hooks/useTilt3D";

const Profile = () => {
  const sectionRef = useScrollReveal();
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useTilt3D(5);

  return (
    <section
      id="profile"
      ref={sectionRef}
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10"
    >
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card rounded-3xl p-6 md:p-12 lg:p-16 xl:p-20 scroll-reveal-scale"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Profile Image + Socials */}
          <div className="flex flex-col items-center lg:items-start" style={{ transform: "translateZ(30px)" }}>
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-accent/30 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-48 sm:w-56 md:w-64 lg:w-72 overflow-hidden rounded-2xl border-2 border-white/10 relative">
                <img
                  src={person}
                  alt="Sarvesh Kshatriya — profile"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-5">
              <SocialMedia />
            </div>
          </div>

          {/* Profile Text */}
          <div className="w-full lg:max-w-xl" style={{ transform: "translateZ(20px)" }}>
            <h2 className="font-display text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-bold text-text-primary mb-4 leading-tight">
              Professional <span className="text-gradient">Web Developer</span> & Data Engineer
            </h2>

            <div className="text-xs xs:text-base lg:text-lg font-normal max-md:text-center text-text-secondary space-y-3">
              <p>
                I build fast, modern and scalable web applications with clean UI
                and responsive layouts.
              </p>
              <p>
                I also work with data — exploring ML models, visualizations and
                analytics to turn data into insights.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 max-md:justify-center">
              <ScrollLink
                to="portfolio"
                smooth={true}
                duration={800}
                offset={-120}
                className="btn btn-primary rounded-xl px-7 py-3 text-sm font-semibold cursor-pointer inline-flex items-center gap-2"
                aria-label="View projects"
              >
                View Projects
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </ScrollLink>

              <a
                href="https://www.linkedin.com/in/sarvesh-kshatriya/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl px-7 py-3 text-sm font-semibold bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 hover:border-accent/30 inline-flex items-center gap-2"
              >
                LinkedIn
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
