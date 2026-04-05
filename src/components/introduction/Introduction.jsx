import person from "../../assets/images/person2.webp";
import InformationSummary from "./InformationSummary";
import useScrollReveal from "../../hooks/useScrollReveal";
import { useState, useEffect } from "react";

const informationSummaryData = [
  { id: 1, title: "Experience", description: "3+", suffix: "Years" },
  { id: 2, title: "Projects", description: "10+", suffix: "Done" },
  { id: 3, title: "Current Role", description: "Freelancer", suffix: "" },
];

const roles = ["Web Developer", "Data Engineer", "DBT Developer", "Freelancer"];

const Introduction = () => {
  const sectionRef = useScrollReveal();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <div
      ref={sectionRef}
      className="flex max-lg:flex-col-reverse sm:justify-between pt-24 lg:pt-36 mb-10 gap-10 p-2"
      id="introduction"
    >
      {/* LEFT SIDE */}
      <div className="w-full flex flex-col justify-between max-lg:text-center scroll-reveal-left">
        <div className="pt-6 lg:pt-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-text-secondary text-sm">Available for work</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-4xl xxs:text-5xl sm:text-6xl xl:text-7xl font-bold text-text-primary leading-tight">
            Hello, I'm
            <span className="block text-gradient mt-2">Sarvesh Kshatriya</span>
          </h1>

          {/* Typing role */}
          <div className="mt-6 flex items-center max-lg:justify-center gap-2">
            <span className="text-accent text-lg lg:text-xl font-mono">{">"}</span>
            <span className="text-lg lg:text-xl font-mono text-text-primary border-r-2 border-accent pr-1"
              style={{ animation: "typing-cursor 1s infinite" }}>
              {displayText}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm xxs:text-base lg:text-lg mt-6 leading-relaxed text-text-secondary max-w-xl max-lg:mx-auto">
            I'm a passionate web developer and data engineer with over 3 years of experience. 
            I specialize in building dynamic websites and crafting efficient data pipelines.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-8 max-lg:justify-center">
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
              href="https://www.linkedin.com/in/sarvesh-kshatriya/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-xl px-6 py-3 text-sm font-semibold bg-white/5 border border-white/10 text-text-primary hover:bg-white/10 hover:border-accent/30 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* INFO BOXES */}
        <div className="mx-auto lg:mx-0 mt-10">
          <div className="grid grid-cols-3 gap-3">
            {informationSummaryData.map((item, index) => (
              <InformationSummary key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="max-w-md w-full max-lg:mx-auto relative scroll-reveal-right">
        {/* Glow ring behind image */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-cyan-500/10 blur-2xl scale-110 animate-glow-pulse" />

        {/* Floating geometric shapes */}
        <div className="absolute -top-6 -right-6 w-20 h-20 border border-accent/20 rounded-2xl animate-rotate-slow" />
        <div className="absolute -bottom-4 -left-4 w-14 h-14 border border-cyan-400/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

        {/* Profile Image */}
        <div className="relative animate-float-shadow rounded-3xl overflow-hidden border border-white/10">
          <img
            className="w-full h-full object-cover"
            src={person}
            alt="Sarvesh Kshatriya"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/40 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
