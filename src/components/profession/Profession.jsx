import Roles from "./Roles";
import useScrollReveal from "../../hooks/useScrollReveal";

const rolesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description:
      "Developing responsive, database-driven web applications using React.js, Node.js, Express.js, MongoDB, MySQL, and RESTful APIs.",
  },
  {
    id: 2,
    title: "Cloud & Data Engineering",
    description:
      "Building ETL/ELT pipelines, data warehouses, and data modeling pipelines using AWS S3, Snowflake, dbt, Python, and SQL.",
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence",
    description:
      "Transforming raw datasets into actionable insights by designing Star Schema models and interactive dashboards in Power BI, DAX, and Advanced Excel.",
  },
  {
    id: 4,
    title: "Machine Learning & Predictive Modeling",
    description:
      "Conducting exploratory data analysis (EDA), feature engineering, and developing classification & regression models with Scikit-learn, Pandas, and NumPy.",
  },
];

const Profession = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="services" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Services section">

      {/* Services Grid Header */}
      <div className="mb-8 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Core Domains</p>
        <h2 className="section-title">What I Do</h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Technical specialization across web development, data engineering, business analytics, and machine learning.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-4 scroll-reveal">
        {rolesData.map((role) => (
          <Roles key={role.id} role={role} />
        ))}
      </div>

    </section>
  );
};

export default Profession;
