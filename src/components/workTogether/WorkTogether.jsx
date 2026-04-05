import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import useScrollReveal from "../../hooks/useScrollReveal";

const WorkTogether = () => {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef} className="py-28 max-w-3xl mx-auto px-4 relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="text-center relative z-10 scroll-reveal">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="text-accent text-sm font-medium">💡 Open to Collaborate</span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight pb-6">
          Do you have a{" "}
          <span className="text-gradient">Project Idea</span>?
          <br />
          Let's discuss it!
        </h2>

        <p className="text-text-secondary text-sm sm:text-lg font-normal text-center pb-10 max-w-xl mx-auto">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>

        {/* CTA Button */}
        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-100}
          className="btn btn-primary rounded-xl px-8 py-4 text-base font-semibold cursor-pointer inline-flex items-center gap-3 animate-glow-pulse"
        >
          Let's Work Together
          <FontAwesomeIcon icon={faArrowRight} className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default WorkTogether;
