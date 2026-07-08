import useScrollReveal from "../../hooks/useScrollReveal";

const achievementsData = [
  {
    id: 1,
    prize: "2nd Prize",
    title: "Artificial Intelligence (AI) Career Guide",
    event: "College Level Hackathon",
    year: "2025",
    description:
      "Awarded for designing and building an AI-powered system that guides students to matching career paths based on interests and algorithms.",
  },
  {
    id: 2,
    prize: "2nd Prize",
    title: "Blind Code Competition",
    event: "State Level Technical Event",
    year: "2023",
    description:
      "Secured second place in a state-level coding competition writing complex code syntax with monitor display off.",
  },
  {
    id: 3,
    prize: "2nd Prize",
    title: "Gram Aarogya Sanjivani",
    event: "State Level Project Exhibition",
    year: "2023",
    description:
      "Awarded for designing and presenting an accessible healthcare awareness platform focused on rural communities.",
  },
];

const certificationsData = [
  { id: 1, name: "Cloud Computing Internship Certificate",      org: "AWS / Arrow Technologies" },
  { id: 2, name: "Machine Learning Internship Certificate",     org: "SimpliLearn" },
  { id: 3, name: "Data Structures & Algorithms Course (C++)",   org: "Online Platform" },
  { id: 4, name: "Web Development Certifications",              org: "Various" },
];

const Achievements = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="achievements" ref={sectionRef} className="content px-4 py-16 md:py-24">

      {/* Header */}
      <div className="mb-16 text-center max-w-2xl mx-auto scroll-reveal">
        <p className="section-title">
          Honors &amp; <span className="text-gradient">Credentials</span>
        </p>
        <p className="text-text-secondary text-sm md:text-base mt-4 leading-relaxed">
          Competitions won, hackathon achievements, and technical credentials obtained along my software engineering path.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

        {/* ACHIEVEMENTS (3 cols) */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="flex items-center gap-3 mb-8 scroll-reveal-left">
            <span className="text-2xl bg-amber-500/10 text-amber-400 w-10 h-10 rounded-xl flex items-center justify-center">🏆</span>
            <h3 className="font-display text-xl font-bold text-text-primary">Hackathons &amp; Competitions</h3>
          </div>

          <div className="space-y-5">
            {achievementsData.map((item, index) => (
              <div
                key={item.id}
                className={`glass-card p-6 flex items-start gap-4 group hover-lift scroll-reveal-left stagger-${index + 1}`}
              >
                <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-amber-500/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                  🏆
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="badge-accent">{item.prize}</span>
                    <span className="text-[11px] text-text-muted font-mono">{item.year}</span>
                  </div>
                  <h4 className="text-text-primary text-[15px] font-display font-bold group-hover:text-accent-light transition-colors duration-300 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[12px] font-semibold text-accent/70 mt-0.5 uppercase tracking-wide">{item.event}</p>
                  <p className="text-[13px] text-text-secondary mt-2 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS (2 cols) */}
        <div className="lg:col-span-2 flex flex-col">
          <div className="flex items-center gap-3 mb-8 scroll-reveal-right">
            <span className="text-2xl bg-cyan-500/10 text-cyan-400 w-10 h-10 rounded-xl flex items-center justify-center">🎖️</span>
            <h3 className="font-display text-xl font-bold text-text-primary">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certificationsData.map((item, index) => (
              <div
                key={item.id}
                className={`glass-card p-5 flex items-center gap-4 hover-lift scroll-reveal-right stagger-${index + 1}`}
              >
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/[0.05] text-xl border border-white/[0.06]">
                  🎖️
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-text-primary text-[13.5px] font-semibold leading-snug">{item.name}</h4>
                  <p className="text-[11px] text-text-muted mt-0.5">{item.org}</p>
                  <span className="text-[10px] text-accent/60 font-medium uppercase tracking-wider font-mono">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
