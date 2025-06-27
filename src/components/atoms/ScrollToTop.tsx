import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);

      return () => clearTimeout(timer); // nettoyage au cas où
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
