const Roles = ({ role, index }) => {
  return (
    <div
      className={`group relative glass-card my-4 p-5 sm:p-7 flex items-start gap-4 overflow-hidden scroll-reveal stagger-${index + 1}`}
    >
      {/* Hover gradient border left */}
      <span
        className="absolute left-0 top-0 h-full w-0 group-hover:w-1 bg-gradient-to-b from-accent to-cyan-400 transition-all duration-400 rounded-r"
      />

      {/* Icon */}
      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/5 text-2xl group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
        {role.icon}
      </div>

      {/* Text */}
      <div>
        <p className="text-lg sm:text-xl font-display font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
          {role.title}
        </p>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {role.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;
