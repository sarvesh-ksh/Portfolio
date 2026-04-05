import useTilt3D from "../../hooks/useTilt3D";

const categoryStyles = {
  "DATA ENGINEERING": { icon: "⚙️", gradient: "from-blue-500/20 to-cyan-500/10" },
  "WEB SECURITY": { icon: "🛡️", gradient: "from-red-500/20 to-orange-500/10" },
  "WEB APP": { icon: "🚀", gradient: "from-purple-500/20 to-pink-500/10" },
  "AI PROJECT": { icon: "🤖", gradient: "from-emerald-500/20 to-teal-500/10" },
  "WEB DEVELOPMENT": { icon: "🌐", gradient: "from-violet-500/20 to-indigo-500/10" },
  "DASHBOARD": { icon: "📊", gradient: "from-amber-500/20 to-yellow-500/10" },
};

const Projects = ({ data }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(5);
  const hasLink = data?.link && data.link !== "#!";
  const style = categoryStyles[data?.category] || { icon: "💻", gradient: "from-white/10 to-white/5" };

  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: data.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="group block h-full">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="glass-card overflow-hidden cursor-pointer h-full flex flex-col"
        style={{ transformStyle: "preserve-3d", willChange: "transform" }}
      >
        {/* Top accent bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${style.gradient}`} />

        {/* Content */}
        <div className="p-6 sm:p-7 flex-1 flex flex-col" style={{ transform: "translateZ(15px)" }}>
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl">{style.icon}</span>
            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-wider bg-white/5 text-text-muted border border-white/5">
              {data?.category}
            </span>
          </div>

          {/* Title */}
          <p className="text-text-primary text-lg font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300">
            {data?.title}
          </p>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed flex-1">
            {data?.description}
          </p>

          {/* Divider */}
          <div className="h-px w-full bg-white/5 my-4" />

          {/* CTA */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-text-muted group-hover:text-accent transition-colors duration-300 font-medium">
              {hasLink ? "View Project" : "Coming Soon"}
            </p>
            <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-muted group-hover:text-accent group-hover:bg-accent/10 group-hover:translate-x-0.5 transition-all duration-300">
              →
            </span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;