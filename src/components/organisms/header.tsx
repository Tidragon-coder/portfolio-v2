import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo/logo_second.png";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/#aproposdemoi", label: "À propos" },
  { to: "/projects", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  // ScrollToTop se charge du scroll vers l'ancre de "À propos"
  const isActive = (to: string) => {
    if (to === "/") return pathname === "/" && !hash;
    if (to.startsWith("/#")) return pathname === "/" && hash === to.slice(1);
    if (to === "/projects") return pathname.startsWith("/projects") || pathname.startsWith("/projets");
    return pathname === to;
  };

  return (
    <header className="text-white py-3 fixed top-0 left-0 w-full z-50 bg-primary/70 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <Link to="/" aria-label="Accueil">
          <img src={logo} alt="Logo Théo Spetebroot" className="h-12 w-auto" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative py-1 transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-highlight after:transition-transform after:duration-300 ${
                  isActive(link.to)
                    ? "text-highlight after:scale-x-100"
                    : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {`<${link.label}/>`}
              </Link>
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden mt-3 border-t border-white/10 flex flex-col items-center">
          {navLinks.map((link) => (
            <li key={link.to} className="w-full text-center border-b border-white/10 last:border-b-0">
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block py-4 ${isActive(link.to) ? "text-highlight" : "text-white/80"}`}
              >
                {`<${link.label}/>`}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
