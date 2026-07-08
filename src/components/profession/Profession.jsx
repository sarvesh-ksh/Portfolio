import Roles from "./Roles";
import useScrollReveal from "../../hooks/useScrollReveal";

const rolesData = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Developer",
    description:
      "Building fast, responsive, and modern web applications using clean, scalable code and modern framework integration.",
  },
  {
    id: 2,
    icon: "🔬",
    title: "Data Scientist",
    description:
      "Applying statistical techniques, performing exploratory data analysis, and building machine learning models using Python, Pandas, and NumPy.",
  },
  {
    id: 3,
    icon: "📊",
    title: "Data Analyst",
    description:
      "Transforming raw data into actionable business insights by designing interactive dashboards in Power BI, writing SQL, and generating reports.",
  },
];

const Profession = () => {
  const sectionRef = useScrollReveal();

  return (
    <div
      ref={sectionRef}
      className="content grid md:grid-cols-2 py-16 md:py-24 lg:py-32 max-xxl:px-4 xxl:px-2 gap-8"
    >
      <div className="flex flex-col justify-center max-md:text-center md:pe-8 lg:pe-16 scroll-reveal-left">
        <p className="section-title">
          What I <span className="text-gradient">Do</span>?
        </p>

        <p className="mt-6 text-sm sm:text-lg text-text-secondary leading-relaxed">
          Building modern web apps, performing deep data analysis, and creating 
          intelligent machine learning solutions to solve real-world problems.
        </p>

        <a
          href="#contact"
          className="btn btn-primary rounded-xl w-fit mt-8 text-sm font-semibold max-md:mx-auto px-7 py-3"
        >
          Say Hello 👋
        </a>
      </div>

      <div id="services" className="scroll-reveal-right">
        {rolesData.map((role, index) => (
          <Roles key={role.id} role={role} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
