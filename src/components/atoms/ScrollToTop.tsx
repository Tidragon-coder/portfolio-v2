import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Laisse le temps à la page de s'afficher avant de scroller
    const timer = setTimeout(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 300);

    return () => clearTimeout(timer); // nettoyage au cas où
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
