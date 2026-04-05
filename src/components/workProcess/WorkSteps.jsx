import useTilt3D from "../../hooks/useTilt3D";

const WorkSteps = ({ data, index }) => {
  const { ref, handleMouseMove, handleMouseLeave } = useTilt3D(6);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`scroll-reveal stagger-${index + 1} glass-card group p-6 sm:p-7 cursor-default ${
        index % 2 === 1 ? "xs:mt-8" : ""
      }`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${data?.color} text-2xl shadow-lg`}
        style={{ transform: "translateZ(20px)" }}
      >
        {data?.icon}
      </div>

      {/* Step number */}
      <div className="mt-5 flex items-center gap-2" style={{ transform: "translateZ(15px)" }}>
        <span className="text-xs font-bold text-accent font-mono">0{data?.id}</span>
        <span className="w-8 h-px bg-accent/30" />
      </div>

      {/* Text */}
      <div style={{ transform: "translateZ(10px)" }}>
        <p className="font-display font-bold text-lg sm:text-xl text-text-primary mt-2">
          {data?.title}
        </p>
        <p className="mt-2 text-sm text-text-secondary leading-relaxed">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
