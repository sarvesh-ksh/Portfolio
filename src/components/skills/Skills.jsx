import useScrollReveal from "../../hooks/useScrollReveal";

const skillCategories = [
  {
    id: 1,
    title: "Programming & Core",
    icon: "💻",
    color: "text-violet-400",
    bg:    "bg-violet-500/10",
    skills: [
      "JavaScript","Python","Java","C++","SQL",
      "Data Structures & Algorithms","OOP","DBMS","Computer Networks","Software Engineering",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    icon: "🌐",
    color: "text-cyan-400",
    bg:    "bg-cyan-500/10",
    skills: [
      "React.js","Node.js","Express.js","HTML5","CSS3","REST APIs","MongoDB","MySQL",
    ],
  },
  {
    id: 3,
    title: "Cloud & Data Science",
    icon: "🔬",
    color: "text-emerald-400",
    bg:    "bg-emerald-500/10",
    skills: [
      "Machine Learning","Pandas","NumPy","Snowflake","DBT","AWS",
    ],
  },
  {
    id: 4,
    title: "Analytics & Tools",
    icon: "📊",
    color: "text-amber-400",
    bg:    "bg-amber-500/10",
    skills: [
      "Power BI","Excel","DAX","Power Query","Git & GitHub","VS Code","Postman",
    ],
  },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" ref={sectionRef} className="content px-4 py-16 md:py-24">

      {/* Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto scroll-reveal">
        <p className="section-title">
          Technical <span className="text-gradient">Skills</span>
        </p>
        <p className="text-text-secondary text-sm md:text-base mt-4 leading-relaxed">
          My technical toolkit spanning programming languages, web frameworks,
          cloud platforms, data science libraries, and analytics tools.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={`glass-card p-7 flex flex-col scroll-reveal-scale stagger-${index + 1}`}
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <span className={`text-2xl ${category.bg} w-11 h-11 rounded-xl flex items-center justify-center border border-white/[0.06]`}>
                {category.icon}
              </span>
              <div>
                <h3 className={`font-display text-[16px] font-bold ${category.color}`}>
                  {category.title}
                </h3>
                <p className="text-text-muted text-[11px] mt-0.5">{category.skills.length} skills</p>
              </div>
            </div>

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
