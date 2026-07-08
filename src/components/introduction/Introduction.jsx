import person from "../../assets/images/person2.webp";
import InformationSummary from "./InformationSummary";
import useScrollReveal from "../../hooks/useScrollReveal";
import { useState, useEffect } from "react";

const informationSummaryData = [
  { id: 1, title: "Experience", description: "3+",          suffix: "Years" },
  { id: 2, title: "Projects",   description: "10+",         suffix: "Done" },
  { id: 3, title: "Current",    description: "Freelancer",  suffix: "" },
];

const roles = ["Web Developer", "Data Analyst", "Data Scientist", "Freelancer"];

const Introduction = () => {
  const sectionRef   = useScrollReveal();
  const [roleIndex,  setRoleIndex]  = useState(0);
  const [displayText,setDisplayText]= useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typing effect */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 45 : 95);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      ref={sectionRef}
      className="hero-bg min-h-screen flex items-center px-4"
      id="introduction"
    >
      {/* Background decorative grid */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="content w-full pt-28 pb-20 relative z-10">
        <div className="flex max-lg:flex-col-reverse items-center justify-between gap-12 lg:gap-16">

          {/* ── LEFT ── */}
          <div className="w-full lg:max-w-[52%] flex flex-col max-lg:text-center scroll-reveal-left">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] mb-8 w-fit max-lg:mx-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
              <span className="text-text-secondary text-[13px] font-medium tracking-wide">Available for work</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl xs:text-5xl sm:text-6xl xl:text-7xl font-bold text-text-primary leading-[1.08] tracking-tight">
              Hello, I'm
              <span className="block text-gradient mt-2">Sarvesh Kshatriya</span>
            </h1>

            {/* Typing role */}
            <div className="mt-7 flex items-center max-lg:justify-center gap-2">
              <span className="text-accent text-lg lg:text-xl font-mono select-none">&#62;</span>
              <span
                className="text-lg lg:text-xl font-mono text-text-primary border-r-2 border-accent pr-1 min-h-[1.5em]"
                style={{ animation: "typing-cursor 1s infinite" }}
              >
                {displayText}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm xs:text-base lg:text-lg mt-6 leading-relaxed text-text-secondary max-w-xl max-lg:mx-auto">
              Computer engineering student passionate about building modern web applications
              and deriving insights from complex datasets. I blend clean code with data-driven thinking.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8 max-lg:justify-center">
              <a
                href="https://github.com/sarvesh-ksh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-xl px-6 py-3 text-sm font-semibold inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kshatriya-sarvesh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-xl px-6 py-3 text-sm font-semibold bg-white/[0.05] border border-white/[0.1] text-text-primary hover:bg-white/[0.09] hover:border-accent/30 inline-flex items-center gap-2 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 mx-auto lg:mx-0">
              <div className="grid grid-cols-3 gap-3">
                {informationSummaryData.map((item, index) => (
                  <InformationSummary key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT IMAGE ── */}
          <div className="w-full max-w-sm lg:max-w-[40%] max-lg:mx-auto relative scroll-reveal-right">
            {/* Glow aura */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/25 via-transparent to-accent2/15 blur-3xl scale-110 animate-glow-pulse pointer-events-none" />

            {/* Decorative floating shapes */}
            <div className="absolute -top-5 -right-5 w-16 h-16 border border-accent/20 rounded-2xl animate-rotate-slow pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-accent2/20 rounded-full animate-float pointer-events-none" style={{ animationDelay: "2.5s" }} />

            {/* Profile image */}
            <div className="relative animate-float-shadow rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-black/60">
              <img
                className="w-full h-full object-cover"
                src={person}
                alt="Sarvesh Kshatriya"
                loading="eager"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/35 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-bg-secondary/90 backdrop-blur-xl border border-white/[0.1] shadow-lg whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-text-secondary text-[12px] font-medium">Open to opportunities</span>
            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center mt-20">
          <div className="flex flex-col items-center gap-2 text-text-muted">
            <span className="text-[11px] uppercase tracking-[0.18em] font-medium">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-text-muted to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
