import useScrollReveal from "../../hooks/useScrollReveal";

const experienceData = [
  {
    id: 1,
    role: "Machine Learning Intern",
    company: "SimpliLearn",
    location: "Remote",
    period: "06/2024 – 09/2024",
    details: [
      "Applied statistical techniques for Exploratory Data Analysis (EDA) and data cleaning using Pandas and NumPy.",
      "Identified critical patterns in housing datasets and applied machine learning models.",
    ],
  },
  {
    id: 2,
    role: "Data Analytics Intern",
    company: "Softhub Yess InfoTech",
    location: "Nashik, India",
    period: "Internship",
    details: [
      "Worked with SQL databases and Excel sheet logic for business intelligence reporting.",
      "Processed, queried, and analyzed structured datasets to generate analytical outputs.",
    ],
  },
  {
    id: 3,
    role: "Web Developer (Freelance)",
    company: "Saimaya Beauty Parlor",
    location: "Nashik, India",
    period: "11/2023 – 03/2024",
    details: [
      "Developed and deployed a highly responsive modern landing website using React & CSS.",
      "Improved local SEO, online search visibility, and customer booking engagement rates.",
    ],
  },
  {
    id: 4,
    role: "Cloud Compute Intern",
    company: "Arrow Technologies & Solutions",
    location: "Nashik, India",
    period: "06/2023 – 07/2023",
    details: [
      "Gained hands-on experience with Amazon Web Services (AWS) deployment environments.",
      "Explored networking fundamentals, security configurations, and virtual machines setup.",
    ],
  },
];

const educationData = [
  {
    id: 1,
    degree: "B.E. in Computer Engineering",
    institution: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "2024 – 2027",
    details: [
      "Current Grade: 9.29 CGPA",
      "Focusing on software development, database design, and cloud architecture.",
    ],
  },
  {
    id: 2,
    degree: "Diploma in Computer Engineering",
    institution: "MSBTE",
    location: "Nashik, India",
    period: "2021 – 2024",
    details: [
      "Final Score: 82.11%",
      "Foundational studies in programming, algorithms, networks, and system basics.",
    ],
  },
];

const TimelineCard = ({ item, type, index }) => (
  <div
    className={`glass-card p-6 flex flex-col group cursor-default relative
      border-l-2 border-l-accent/40 hover:border-l-accent
      hover-lift scroll-reveal-${type === "experience" ? "left" : "right"} stagger-${index + 1}`}
  >
    {/* Dot */}
    <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-accent shadow-sm shadow-accent/60" />

    {/* Period + location row */}
    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
      <span className="badge-accent">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
        {item.period}
      </span>
      <span className="text-[11px] text-text-muted font-medium flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        {item.location}
      </span>
    </div>

    {/* Title */}
    <h4 className="text-text-primary text-[16px] font-display font-bold group-hover:text-accent-light transition-colors duration-300">
      {type === "experience" ? item.role : item.degree}
    </h4>

    {/* Subtitle */}
    <p className="text-[13px] font-medium text-text-secondary mt-1">
      {type === "experience" ? item.company : item.institution}
    </p>

    {/* Detail bullets */}
    <ul className="mt-4 space-y-2 text-[12.5px] text-text-secondary leading-relaxed">
      {item.details.map((detail, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="mt-[3px] w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const Timeline = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" ref={sectionRef} className="content px-4 py-16 md:py-24">

      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto scroll-reveal">
        <p className="section-title">
          My <span className="text-gradient">Journey</span>
        </p>
        <p className="text-text-secondary text-sm md:text-base mt-4 leading-relaxed">
          An overview of my academic foundation and hands-on professional experiences as an intern and freelancer.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 xl:gap-14">

        {/* EXPERIENCE */}
        <div>
          <div className="flex items-center gap-3 mb-8 scroll-reveal-left">
            <span className="text-2xl bg-accent/10 text-accent w-10 h-10 rounded-xl flex items-center justify-center">💼</span>
            <h3 className="font-display text-xl font-bold text-text-primary">Work Experience</h3>
          </div>
          <div className="relative pl-4 space-y-5 border-l border-white/[0.06]">
            {experienceData.map((item, index) => (
              <TimelineCard key={item.id} item={item} type="experience" index={index} />
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <div className="flex items-center gap-3 mb-8 scroll-reveal-right">
            <span className="text-2xl bg-cyan-500/10 text-cyan-400 w-10 h-10 rounded-xl flex items-center justify-center">🎓</span>
            <h3 className="font-display text-xl font-bold text-text-primary">Education</h3>
          </div>
          <div className="relative pl-4 space-y-5 border-l border-white/[0.06]">
            {educationData.map((item, index) => (
              <TimelineCard key={item.id} item={item} type="education" index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
