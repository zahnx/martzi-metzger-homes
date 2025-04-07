import { useEffect } from "react";
import AnimationContext from "./AnimationContext";

const AnimationProvider = ({ children }) => {
  const triggerAnimation = (elm) => {
    const animation = elm.getAttribute("data-animation");
    const speed = elm.getAttribute("data-speed")
      ? `animated-${elm.getAttribute("data-speed")}`
      : "animated";
    const delay = elm.getAttribute("data-delay")
      ? `animate-${elm.getAttribute("data-delay")}`
      : null;

    // Prevent empty string class
    if (animation) {
      elm.classList.add(speed, animation, delay);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerAnimation(entry.target);
            entry.target.classList.remove("pre-animate"); // optional cleanup
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animation]").forEach((elm) => {
      elm.classList.add("pre-animate"); // 💥 Add this
      observer.observe(elm);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AnimationContext.Provider value={{}}>{children}</AnimationContext.Provider>
  );
};

export default AnimationProvider;
