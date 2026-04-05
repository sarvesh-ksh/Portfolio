import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
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

      {/* Workflow */}
      <div className="section-gradient pt-30">
        <WorkProcess />
      </div>

      {/* Projects */}
      <div className="section-dark">
        <Portfolio />
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
