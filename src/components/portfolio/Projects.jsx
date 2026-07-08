import useTilt3D from "../../hooks/useTilt3D";

const categoryStyles = {
  "DATA ENGINEERING": { icon: "⚙️",  color: "from-blue-500/25 to-cyan-500/10",     chip: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
  "DATA SCIENCE":     { icon: "🔬",  color: "from-emerald-500/25 to-teal-500/10", chip: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  "DATA ANALYSIS":    { icon: "📊",  color: "from-amber-500/25 to-yellow-500/10", chip: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
  "WEB SECURITY":     { icon: "🛡️", color: "from-red-500/25 to-orange-500/10",   chip: "bg-red-500/10 text-red-400 border-red-500/20" },
  "WEB APP":          { icon: "🚀",  color: "from-violet-500/25 to-pink-500/10",  chip: "bg-violet-500/10 text-violet-400 border-violet-500/20" },
  "AI PROJECT":       { icon: "🤖",  color: "from-emerald-500/25 to-teal-500/10",chip: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
  "WEB DEVELOPMENT":  { icon: "🌐",  color: "from-indigo-500/25 to-violet-500/10",chip: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
  "DASHBOARD":        { icon: "📊",  color: "from-amber-500/25 to-yellow-500/10", chip: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
};

const Projects = ({ data }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(5);
  const hasLink = data?.link && data.link !== "#!";
  const style   = categoryStyles[data?.category] || { icon: "💻", color: "from-white/10 to-white/5", chip: "bg-white/5 text-text-muted border-white/10" };

  const Wrapper     = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: data.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-2xl">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card overflow-hidden cursor-pointer h-full flex flex-col hover-lift"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Top gradient band */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${style.color}`} />

        {/* Card body */}
        <div className="p-6 flex-1 flex flex-col" style={{ transform: "translateZ(12px)" }}>

          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <span className="text-3xl leading-none">{style.icon}</span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider border ${style.chip}`}>
              {data?.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-text-primary text-[17px] font-display font-bold mb-2.5 leading-snug group-hover:text-accent-light transition-colors duration-300">
            {data?.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-[13.5px] leading-relaxed flex-1">
            {data?.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-white/[0.06] my-4" />

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <span className="text-[12px] text-text-muted group-hover:text-accent transition-colors duration-300 font-medium">
              {hasLink ? (data.link.includes("github") ? "View Source" : "Live Demo") : "Coming Soon"}
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center text-text-muted group-hover:text-accent group-hover:bg-accent/10 group-hover:translate-x-1 transition-all duration-300">
              {hasLink ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
              )}
            </div>
          </div>

        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;