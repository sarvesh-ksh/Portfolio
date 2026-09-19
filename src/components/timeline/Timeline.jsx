import useScrollReveal from "../../hooks/useScrollReveal";

const experienceData = [
  {
    id: 1,
    role: "Data Analytics Intern",
    company: "Softhub Yess InfoTech",
    location: "Pune, Maharashtra",
    period: "Dec 2025 – Feb 2026",
    details: [
      "Processed and analyzed structured business datasets using SQL and Advanced Excel to support reporting workflows.",
      "Worked on SQL query optimization and contributed to dashboard creation for internal business intelligence use.",
    ],
  },
  {
    id: 2,
    role: "Machine Learning Intern",
    company: "SimpliLearn",
    location: "Remote",
    period: "Jun 2024 – Sep 2024",
    details: [
      "Applied EDA techniques and data cleaning on structured datasets using Pandas and NumPy to surface patterns in housing data.",
      "Built and evaluated predictive ML models on cleaned datasets, reinforcing applied machine learning workflows.",
    ],
  },
  {
    id: 3,
    role: "Web Developer (Freelance)",
    company: "Saimaya Beauty Parlor",
    location: "Nashik, Maharashtra",
    period: "Nov 2023 – Mar 2024",
    details: [
      "Designed and deployed a responsive landing site using React and Tailwind CSS, improving the client's online presence and discoverability.",
    ],
  },
  {
    id: 4,
    role: "Cloud Compute Intern",
    company: "Arrow Technologies & Solutions",
    location: "Nashik, Maharashtra",
    period: "Jun 2023 – Jul 2023",
    details: [
      "Gained hands-on exposure to AWS deployment environments, EC2 instances, and foundational cloud networking concepts.",
    ],
  },
];

const educationData = [
  {
    id: 1,
    degree: "B.E. in Computer Engineering",
    institution: "Savitribai Phule Pune University (SPPU)",
    location: "Pune, Maharashtra",
    period: "2024 – 2027",
    details: [
      "Current CGPA: 9.19",
      "Coursework: Software Engineering, Database Systems, Data Structures & Algorithms, Computer Networks, Operating Systems.",
    ],
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "MSBTE",
    location: "Nashik, Maharashtra",
    period: "2021 – 2024",
    details: [
      "Final Score: 82.11%",
      "Foundational coursework in Programming, Data Structures, Operating Systems, Computer Networks, and DBMS.",
    ],
  },
];

const TimelineCard = ({ item, type }) => (
  <div className="card p-5 relative border-l-2 border-l-accent/40 hover:border-l-accent transition-colors">
    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
      <span className="badge-accent">{item.period}</span>
      <span className="text-[11px] text-text-muted font-medium">{item.location}</span>
    </div>

    <h4 className="text-text-primary text-[15px] font-display font-semibold leading-snug">
      {type === "experience" ? item.role : item.degree}
    </h4>

    <p className="text-xs text-accent mt-0.5 font-medium">
      {type === "experience" ? item.company : item.institution}
    </p>

    <ul className="mt-3 space-y-1.5 text-xs text-text-secondary leading-relaxed">
      {item.details.map((detail, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Timeline = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Experience and Education section">

      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Background</p>
        <h2 className="section-title">Experience &amp; Education</h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Internships, freelance work, and academic background in Computer Engineering.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">

        {/* WORK EXPERIENCE */}
        <div className="scroll-reveal-left">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <h3 className="font-display text-base font-bold text-text-primary">Work Experience</h3>
          </div>
          <div className="space-y-4">
            {experienceData.map((item) => (
              <TimelineCard key={item.id} item={item} type="experience" />
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="scroll-reveal-right max-lg:mt-6">
          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border">
            <h3 className="font-display text-base font-bold text-text-primary">Education</h3>
          </div>
          <div className="space-y-4">
            {educationData.map((item) => (
              <TimelineCard key={item.id} item={item} type="education" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
