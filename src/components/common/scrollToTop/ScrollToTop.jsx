import { useEffect, useState } from "react";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const options = { duration: 500, smooth: true };
const scrollToTop = () => animateScroll.scrollToTop(options);

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-6 w-12 h-12 sm:w-14 sm:h-14
        flex justify-center items-center rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        text-accent hover:bg-accent hover:text-white hover:border-accent
        hover:shadow-lg hover:shadow-accent/30
        transition-all duration-500 ease-in-out z-50
        ${visible ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      aria-label="Scroll to top"
    >
      <FontAwesomeIcon icon={faAngleUp} size="lg" />
    </button>
  );
};

export default ScrollToTop;
