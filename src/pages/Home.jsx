import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";
import WorkProcess from "../components/workProcess/WorkProcess";
import Timeline from "../components/timeline/Timeline";
import Portfolio from "../components/portfolio/Portfolio";
import Achievements from "../components/achievements/Achievements";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div className="relative">
      {/* Hero + Profile */}
      <div className="hero-bg">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* Skills */}
      <div className="section-dark pt-32 lg:pt-44">
        <Skills />
      </div>

      {/* Workflow */}
      <div className="section-gradient">
        <WorkProcess />
      </div>

      {/* Timeline (Experience & Education) */}
      <div className="section-dark">
        <Timeline />
      </div>

      {/* Projects */}
      <div className="section-gradient">
        <Portfolio />
      </div>

      {/* Achievements */}
      <div className="section-dark">
        <Achievements />
      </div>

      {/* CTA */}
      <div className="cta-bg">
        <WorkTogether />
      </div>

      {/* Services */}
      <div className="section-gradient">
        <Profession />
      </div>

      {/* Contact */}
      <div className="section-dark">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
