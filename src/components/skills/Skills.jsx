import useScrollReveal from "../../hooks/useScrollReveal";

const skillCategories = [
  {
    id: 1,
    title: "Data Engineering",
    description: "Pipelines, warehousing, transformation",
    skills: ["Python", "SQL", "Snowflake", "dbt", "AWS S3", "ETL/ELT", "Data Modeling", "Data Warehousing"],
  },
  {
    id: 2,
    title: "Data Science & ML",
    description: "Analysis, modeling, insights",
    skills: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "EDA", "Feature Engineering", "Machine Learning"],
  },
  {
    id: 3,
    title: "Software Development",
    description: "Web applications, APIs, databases",
    skills: ["React.js", "JavaScript", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "HTML5 / CSS3"],
  },
  {
    id: 4,
    title: "Analytics & BI",
    description: "Dashboards, reporting, insights",
    skills: ["Power BI", "DAX", "Power Query", "Advanced Excel", "Pivot Tables"],
  },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Technical skills section">

      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Technical Proficiency</p>
        <h2 className="section-title">Skills</h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Technologies I use regularly, organized by area. Each is backed by real project or internship work.
        </p>
      </div>

      {/* 2x2 grid on desktop, stacked on mobile */}
      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={`card p-5 flex flex-col scroll-reveal stagger-${(i % 4) + 1}`}
          >
            <div className="mb-3 pb-2 border-b border-border">
              <h3 className="text-sm font-semibold text-text-primary">{cat.title}</h3>
              <p className="text-[11px] text-text-muted mt-0.5">{cat.description}</p>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional tools row */}
      <div className="mt-5 card p-4 scroll-reveal">
        <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-3">Tools & Concepts</p>
        <div className="flex flex-wrap gap-1.5">
          {["Git", "GitHub", "VS Code", "Postman", "Linux", "DSA", "OOP", "DBMS", "Computer Networks", "C++"].map((tool) => (
            <span key={tool} className="skill-chip">{tool}</span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;
