import useScrollReveal from "../../hooks/useScrollReveal";

const achievementsData = [
  {
    id: 1,
    prize: "2nd Prize Winner",
    title: "Artificial Intelligence (AI) Career Guide",
    event: "College Level Hackathon",
    year: "2025",
    description:
      "Developed an AI-powered career guidance platform helping students explore 20+ career paths based on interests, skills, and academic background.",
  },
  {
    id: 2,
    prize: "2nd Prize Winner",
    title: "State Level \"Blind Code\" Competition",
    event: "State Level Technical Competition",
    year: "2023",
    description:
      "Secured 2nd place writing complex algorithmic code syntax under strict time limits without monitor display feedback.",
  },
  {
    id: 3,
    prize: "2nd Prize Winner",
    title: "State Level Competition \"Gram Aarogya Sanjivani\"",
    event: "State Level Project Exhibition",
    year: "2023",
    description:
      "Designed and presented an accessible healthcare awareness platform focused on rural communities.",
  },
];

const certificationsData = [
  { id: 1, name: "AWS Data ML Essential",                 org: "Amazon Web Services (AWS)" },
  { id: 2, name: "Cisco Data Science",                    org: "Cisco Networking Academy" },
  { id: 3, name: "Cisco Data Analytics Essential",         org: "Cisco Networking Academy" },
  { id: 4, name: "Cloud Computing Internship Certificate",org: "Arrow Technologies & Solutions" },
  { id: 5, name: "Machine Learning Internship Certificate",org: "SimpliLearn" },
  { id: 6, name: "Data Structures & Algorithms (C++)",   org: "Technical Course" },
  { id: 7, name: "Web Development Certifications",        org: "Various Platforms" },
];

const Achievements = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="achievements" ref={sectionRef} className="content px-4 sm:px-6 py-16 md:py-24" aria-label="Achievements and Certifications section">

      {/* Header */}
      <div className="mb-10 max-w-xl scroll-reveal">
        <p className="section-label mb-2">Recognition</p>
        <h2 className="section-title">
          Achievements &amp; Certifications
        </h2>
        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
          Competitions won, hackathon awards, and verified technical credentials earned throughout engineering studies.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

        {/* ACHIEVEMENTS (3 cols) */}
        <div className="lg:col-span-3 space-y-3 scroll-reveal-left">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Hackathons &amp; Awards</h3>

          {achievementsData.map((item) => (
            <div key={item.id} className="card p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                <span className="badge-accent">{item.prize}</span>
                <span className="text-[11px] font-mono text-text-muted">{item.year}</span>
              </div>

              <h4 className="text-text-primary text-base font-display font-bold leading-snug mt-1">
                {item.title}
              </h4>
              <p className="text-xs font-medium text-accent mt-0.5">{item.event}</p>
              <p className="text-text-secondary text-xs leading-relaxed mt-2.5">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CERTIFICATIONS (2 cols) */}
        <div className="lg:col-span-2 space-y-2.5 scroll-reveal-right max-lg:mt-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3">Certifications</h3>

          {certificationsData.map((item) => (
            <div key={item.id} className="card p-3.5 flex items-center justify-between gap-3">
              <div>
                <h4 className="text-text-primary text-xs font-semibold leading-snug">{item.name}</h4>
                <p className="text-[11px] text-text-muted mt-0.5">{item.org}</p>
              </div>
              <span className="text-[10px] font-medium text-accent uppercase tracking-wider bg-accent-muted px-2 py-0.5 rounded border border-accent/20 flex-shrink-0">
                Verified
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
