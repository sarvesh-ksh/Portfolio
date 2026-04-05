import WorkSteps from "./WorkSteps";
import useScrollReveal from "../../hooks/useScrollReveal";

const workStepData = [
  {
    id: 1,
    title: "Discover",
    description: "Understanding the problem and finding the best solution.",
    icon: "🔍",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 2,
    title: "Analyze",
    description: "Breaking down the problem and planning the solution.",
    icon: "📊",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Design",
    description: "Creating a clear and intuitive user interface.",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    title: "Ship",
    description: "Delivering a polished product that meets the user's needs.",
    icon: "🚀",
    color: "from-amber-500 to-orange-500",
  },
];

const WorkProcess = () => {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="work-process"
      ref={sectionRef}
      className="content grid xl:grid-cols-2 xl:items-center px-4 py-10"
    >
      <div className="lg:pe-10 max-xl:mb-10 scroll-reveal-left">
        <p className="section-title max-xl:text-center">
          My <span className="text-gradient">Workflow</span>
        </p>

        <p className="mt-4 text-text-secondary text-sm md:text-base max-xl:text-center max-w-md max-xl:mx-auto">
          A simple breakdown of how I build projects from start to finish — 
          from understanding the problem to shipping a polished product.
        </p>
      </div>

      <div id="workflow" className="grid xs:grid-cols-2 gap-5 w-fit mx-auto">
        {workStepData.map((item, index) => (
          <WorkSteps
            key={item.id}
            data={item}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
