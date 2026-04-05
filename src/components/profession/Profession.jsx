import Roles from "./Roles";
import useScrollReveal from "../../hooks/useScrollReveal";

const rolesData = [
  {
    id: 1,
    icon: "🌐",
    title: "Web Developer",
    description:
      "Created fast, responsive and modern web applications using clean and scalable code.",
  },
  {
    id: 2,
    icon: "📈",
    title: "Data Engineer",
    description:
      "I worked with data, built models and created smart solutions that help in better decisions.",
  },
  {
    id: 3,
    icon: "❄️",
    title: "Snowflake Developer",
    description:
      "I design and implement data solutions using Snowflake, ensuring efficient data storage and retrieval for analytics and reporting.",
  },
  {
    id: 4,
    icon: "🔄",
    title: "DBT Developer",
    description:
      "I build robust data pipelines and transformations using DBT to ensure data quality and reliability.",
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
          Created modern web apps, worked with data & AI, and designed clean user
          experiences — everything needed to build smart digital products.
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
