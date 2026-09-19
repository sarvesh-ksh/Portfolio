import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";
import Timeline from "../components/timeline/Timeline";
import Portfolio from "../components/portfolio/Portfolio";
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

      {/* Timeline (Experience & Education) */}
      <div className="section-gradient">
        <Timeline />
      </div>

      {/* Projects */}
      <div className="section-dark">
        <Portfolio />
      </div>

      {/* Contact */}
      <div className="section-gradient">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
