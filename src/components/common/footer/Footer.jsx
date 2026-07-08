import SocialMedia from "../socialMedia/SocialMedia";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home",       url: "introduction" },
  { id: 2, name: "About",      url: "profile" },
  { id: 3, name: "Skills",     url: "skills" },
  { id: 4, name: "Experience", url: "experience" },
  { id: 5, name: "Projects",   url: "portfolio" },
  { id: 6, name: "Honors",     url: "achievements" },
  { id: 7, name: "Services",   url: "services" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => (
  <footer className="relative border-t border-white/[0.06] bg-bg-primary overflow-hidden">
    {/* Subtle glow at top */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    <div className="content max-xxl:px-4 py-12">
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center font-display font-bold text-white text-base shadow-lg shadow-accent/30">
            S
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display font-semibold text-[16px] text-text-primary tracking-tight">Sarvesh</span>
            <span className="text-[10px] text-text-muted tracking-widest uppercase font-medium">Portfolio</span>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-0.5">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth
              duration={900}
              className="px-3 py-2 text-[13px] text-text-muted hover:text-accent cursor-pointer transition-colors duration-300 rounded-lg hover:bg-white/[0.04]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <SocialMedia />
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-white/[0.05] my-8" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-text-muted text-[12.5px]">
        <p>© {copyrightYear} Sarvesh Kshatriya. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with
          <span className="text-red-400 text-[14px]">♥</span>
          using React &amp; Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
