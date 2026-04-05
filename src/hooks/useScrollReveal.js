import { useEffect, useRef } from "react";

/**
 * Custom hook that triggers a "revealed" class on elements
 * when they enter the viewport using IntersectionObserver.
 */
const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    // Observe the container and all children with scroll-reveal classes
    const revealElements = element.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale"
    );

    revealElements.forEach((el) => observer.observe(el));

    // Also observe the container itself if it has a reveal class
    if (
      element.classList.contains("scroll-reveal") ||
      element.classList.contains("scroll-reveal-left") ||
      element.classList.contains("scroll-reveal-right") ||
      element.classList.contains("scroll-reveal-scale")
    ) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
};

export default useScrollReveal;
