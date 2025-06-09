import { useEffect } from "react";

const useScrollAppear = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".appear");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Nettoyage
  }, []);
};

export default useScrollAppear;
