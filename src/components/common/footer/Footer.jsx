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

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="relative border-t border-border bg-bg-primary">
    <div className="content max-xxl:px-4 sm:px-6 py-12">
      {/* Top row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Logo + info */}
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded bg-accent flex items-center justify-center font-display font-bold text-white text-xs">
              S
            </div>
            <span className="font-display font-semibold text-sm text-text-primary tracking-tight">
              Sarvesh Kshatriya
            </span>
          </div>
          <p className="text-xs text-text-muted max-w-xs leading-relaxed">
            Computer Engineering Student &bull; Full-Stack Developer &amp; Data Scientist based in Pune, India.
          </p>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer navigation">
          <div className="flex flex-wrap gap-x-1 gap-y-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                smooth
                duration={800}
                className="px-2.5 py-1 text-xs text-text-muted hover:text-text-primary cursor-pointer transition-colors rounded hover:bg-white/[0.03]"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Social */}
        <SocialMedia />
      </div>

      {/* Divider */}
      <div className="divider-line my-6" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] text-text-muted">
        <p>© {year} Sarvesh Kshatriya. All rights reserved.</p>
        <p>Pune, Maharashtra, India &bull; sarveshkshatriya545@gmail.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
