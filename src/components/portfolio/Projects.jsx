const ExternalLinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
  </svg>
);

const Projects = ({ data, isFeatured = false }) => {
  const hasLink = data?.link && data.link !== "#!";

  const Wrapper = hasLink ? "a" : "div";
  const wrapperProps = hasLink
    ? { href: data.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (isFeatured) {
    return (
      <Wrapper
        {...wrapperProps}
        className="group card p-6 sm:p-7 block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent border-l-2 border-l-accent"
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="badge-accent">{data.category}</span>
          <span className="text-[11px] font-semibold text-accent uppercase tracking-wider font-mono">Featured Project</span>
        </div>

        <h3 className="text-text-primary text-lg sm:text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
          {data.title}
        </h3>

        <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
          {data.description}
        </p>

        {data.tech && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {data.tech.map((t) => (
              <span key={t} className="skill-chip">{t}</span>
            ))}
          </div>
        )}

        <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-text-muted group-hover:text-accent transition-colors font-medium">
          <span>{hasLink ? (data.link.includes("github") ? "View Source Code" : "Live Demo") : "Repository Available"}</span>
          <ExternalLinkIcon />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      className="group card p-5 flex flex-col justify-between h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <span className="badge-accent">{data.category}</span>
        </div>

        <h3 className="text-text-primary text-sm font-display font-bold mb-2 leading-snug group-hover:text-accent transition-colors">
          {data.title}
        </h3>

        <p className="text-text-secondary text-xs leading-relaxed mb-4">
          {data.description}
        </p>
      </div>

      <div>
        {data.tech && (
          <div className="flex flex-wrap gap-1 mb-4">
            {data.tech.map((t) => (
              <span key={t} className="skill-chip text-[11px] px-2 py-0.5">{t}</span>
            ))}
          </div>
        )}

        <div className="pt-3 border-t border-border flex items-center justify-between text-xs text-text-muted group-hover:text-accent transition-colors font-medium">
          <span>{hasLink ? (data.link.includes("github") ? "View Source" : "Live Demo") : "Repository Available"}</span>
          <ExternalLinkIcon />
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;