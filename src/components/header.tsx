import { useState } from "react";
import logo from "../assets/logo/logo_second.png";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "rgba(13, 10, 75, 0.7)" }}
      className="text-white py-3 fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between gap-x-12 px-4 md:px-8 relative">
        {/* Logo */}
        <div className="flex items-center gap-8 flex-1">
            <img src={logo} alt="Mon logo" className="h-[60px] w-auto" />

            {/* Desktop menu */}
            <ul className="hidden md:flex gap-[100px] text-[18px] items-center ml-60">
            <li>
                <a
                href="#accueil"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                {"<Accueil/>"}
                </a>
            </li>
            <li>
                <a
                href="#projets"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                {"<A propos de moi/>"}
                </a>
            </li>
            <li>
                <a
                href="#about"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                {"<Projets/>"}
                </a>
            </li>
            <li>
                <a
                href="#contact"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
                >
                {"<Contact/>"}
                </a>
            </li>
            </ul>

        </div>

        {/* Burger Icon */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
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
              d={
                open
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-[#0D0A4B] flex flex-col items-center md:hidden shadow-md z-40">
            <li className="py-3 w-full text-center border-b border-white/20">
              <a href="#accueil" onClick={() => setOpen(false)}>Accueil</a>
            </li>
            <li className="py-3 w-full text-center border-b border-white/20">
              <a href="#projets" onClick={() => setOpen(false)}>Projets</a>
            </li>
            <li className="py-3 w-full text-center border-b border-white/20">
              <a href="#about" onClick={() => setOpen(false)}>Qui suis-je ?</a>
            </li>
            <li className="py-3 w-full text-center">
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
