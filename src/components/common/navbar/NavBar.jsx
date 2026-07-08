import { useEffect, useState } from "react";
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

const handleMenuClick = () => {
  const active = document.activeElement;
  if (active instanceof HTMLElement) active.blur();
};

const NavBar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen, setMobileOpen]  = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLink = (item, mobile = false) => (
    <Link
      key={item.id}
      onClick={() => { handleMenuClick(); if (mobile) setMobileOpen(false); }}
      to={item.url}
      smooth={true}
      duration={900}
      spy={true}
      offset={-100}
      activeClass="nav-active"
      className={`relative cursor-pointer font-medium transition-all duration-300
        ${mobile
          ? "block py-3 px-5 text-base text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-xl"
          : "px-4 py-2 text-sm text-text-secondary hover:text-text-primary rounded-lg hover:bg-white/5"
        }`}
    >
      {item.name}
    </Link>
  );

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="content mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">

            {/* Logo */}
            <Link to="introduction" smooth duration={900} className="cursor-pointer flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-accent2 flex items-center justify-center font-display font-bold text-white text-base shadow-lg shadow-accent/30 group-hover:scale-105 transition-transform duration-300">
                S
              </div>
              <span className="font-display font-semibold text-[17px] text-text-primary hidden sm:block tracking-tight">
                Sarvesh<span className="text-text-muted font-normal">.dev</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navItems.map((item) => navLink(item))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                to="contact"
                smooth
                duration={900}
                className="btn btn-sm sm:btn-md btn-primary rounded-xl cursor-pointer font-semibold text-sm px-5 shadow-md shadow-accent/20 hover:shadow-accent/40 transition-shadow duration-300"
              >
                Contact
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <span className={`w-[18px] h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                <span className={`w-[18px] h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`w-[18px] h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

        {/* Drawer */}
        <div className={`absolute right-0 top-0 h-full w-72 bg-bg-primary/96 backdrop-blur-2xl border-l border-white/[0.06] flex flex-col pt-24 px-4 pb-8 transition-transform duration-400 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col gap-1">
            {navItems.map((item) => navLink(item, true))}
          </div>

          {/* CTA inside drawer */}
          <div className="mt-auto pt-6 border-t border-white/5">
            <Link
              to="contact"
              smooth
              duration={900}
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary rounded-xl cursor-pointer font-semibold text-sm w-full flex justify-center"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
