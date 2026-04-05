import SocialMedia from "../socialMedia/SocialMedia";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Services", url: "services" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-bg-primary">
      <div className="content max-xxl:px-4 py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center font-display font-bold text-white text-lg">
              S
            </div>
            <span className="font-display font-semibold text-lg text-text-primary">
              Sarvesh
            </span>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.url}`}
                className="px-3 py-2 text-sm text-text-secondary hover:text-accent transition-colors duration-300 rounded-lg hover:bg-white/5"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Socials */}
          <SocialMedia />
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/5 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-text-muted text-sm">
          <p>© {copyrightYear} Sarvesh Kshatriya. All rights reserved.</p>
          <p>
            Built with <span className="text-red-400">❤</span>, React.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
