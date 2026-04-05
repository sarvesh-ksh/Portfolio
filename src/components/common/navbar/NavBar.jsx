import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Workflow", url: "workflow" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  const active = document.activeElement;
  if (active instanceof HTMLElement) active.blur();
};

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (item, mobile = false) => (
    <Link
      key={item.id}
      onClick={() => {
        handleMenuClick();
        if (mobile) setMobileOpen(false);
      }}
      to={item.url}
      smooth={true}
      duration={900}
      spy={true}
      offset={-100}
      activeClass="nav-active"
      className={`relative cursor-pointer font-medium transition-all duration-300 hover:text-accent
        ${mobile
          ? "block py-3 px-4 text-lg text-text-primary hover:bg-white/5 rounded-lg"
          : "px-4 py-2 text-sm text-text-secondary hover:text-text-primary"
        }
      `}
    >
      {item.name}
      {!mobile && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full" />
      )}
    </Link>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="content mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="introduction"
              smooth={true}
              duration={900}
              className="cursor-pointer flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center font-display font-bold text-white text-lg shadow-lg shadow-accent/20">
                S
              </div>
              <span className="font-display font-semibold text-lg text-text-primary hidden sm:block">
                Sarvesh
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => navLink(item))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <Link
                to="contact"
                smooth={true}
                duration={900}
                className="btn btn-sm sm:btn-md btn-primary rounded-xl cursor-pointer font-semibold text-sm px-5"
              >
                Contact
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl bg-white/5 border border-white/10 transition-all hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <span
                  className={`w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-text-primary transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-bg-primary/95 backdrop-blur-xl border-l border-white/5 p-6 pt-24 transition-transform duration-500 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => navLink(item, true))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
