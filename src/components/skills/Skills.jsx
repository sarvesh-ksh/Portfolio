import useScrollReveal from "../../hooks/useScrollReveal";

const skillCategories = [
  {
    id: 1,
    title: "Web Development",
    skills: [
      "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs", "MERN Stack",
    ],
  },
  {
    id: 2,
    title: "Cloud & Data Engineering",
    skills: [
      "AWS", "AWS S3", "Snowflake", "dbt", "ETL/ELT Pipelines", "Data Warehousing", "Data Modeling",
    ],
  },
  {
    id: 3,
    title: "Databases & Storage",
    skills: [
      "MongoDB", "MySQL", "Snowflake", "SQL",
    ],
  },
  {
    id: 4,
    title: "Programming Languages",
    skills: [
      "Python", "SQL", "C++", "Java", "JavaScript",
    ],
  },
  {
    id: 5,
    title: "Data Analytics & Visualization",
    skills: [
      "Advanced Excel", "Power BI", "DAX", "Power Query", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau",
    ],
  },
  {
    id: 6,
    title: "Machine Learning & Analytics",
    skills: [
      "Scikit-Learn", "Random Forest", "Predictive Analytics", "Feature Engineering", "EDA", "Data Cleaning",
    ],
  },
  {
    id: 7,
    title: "Tools & Core Concepts",
    skills: [
      "Git", "GitHub", "VS Code", "Postman", "Docker", "Linux", "DSA", "OOP", "DBMS", "Computer Networks", "Software Engineering",
    ],
  },
];

const Skills = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="skills" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Technical skills section">

      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Technical Proficiency</p>
        <h2 className="section-title">
          Technical Skills
        </h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Comprehensive toolkit across web development, cloud &amp; data engineering, databases, programming, analytics, and machine learning.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((cat, i) => (
          <div
            key={cat.id}
            className={`card p-5 flex flex-col scroll-reveal-scale stagger-${(i % 3) + 1}`}
          >
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-border">
              <h3 className="text-sm font-semibold text-text-primary">{cat.title}</h3>
              <span className="text-[11px] text-text-muted font-mono">{cat.skills.length}</span>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-1">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
