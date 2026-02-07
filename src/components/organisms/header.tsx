import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo_second.png";

import { Link } from "react-router-dom";



export const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToHash = (hash: string) => {
    setTimeout(() => {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  }
  
  const goToProjets = () => {
    navigate("/home");
    scrollToHash("#aproposdemoi");
  };
  
  return (
    <header
      style={{ backgroundColor: "rgba(13, 10, 75, 0.7)" }}
      className="text-white py-3 fixed top-0 left-0 w-full z-50 backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between flex-wrap px-4 md:px-8 relative">
        {/* Zone gauche : Logo + menu desktop */}
        <div className="flex items-center justify-between w-full md:w-auto gap-8 flex-1">
          <img src={logo} alt="Mon logo" className="h-[60px] w-auto" />

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-16 text-[18px] items-center leading-normal flex-1 justify-end">
            <li>
              <Link
                to="/"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                {"<Accueil/>"}
              </Link>
            </li>
            <li>
              <button
                onClick={goToProjets}
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                {"<A propos de moi/>"}
              </button>
            </li>
            <li>
              <Link
                to="/projects"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                {"<Projets/>"}
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="relative px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
              >
                {"<Contact/>"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Burger Icon */}
        <button
          className="md:hidden"
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
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile menu */}
        {open && (
          <ul className="fixed top-[76px] left-0 w-full bg-[#0D0A4B] flex flex-col items-center md:hidden shadow-md z-50">
            <li className="py-3 w-full text-center border-b border-white/20">
              <Link to="/" onClick={() => setOpen(false)}>{"<Accueil/>"}</Link>
            </li>
            <li className="py-3 w-full text-center border-b border-white/20">
              <button
                onClick={() => {
                  goToProjets();
                  setOpen(false);
                }}
                className="w-full text-center py-3"
                style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}
              >
                {"<A propos de moi/>"}
              </button>
            </li>
            <li className="py-3 w-full text-center border-b border-white/20">
              <Link to="/projects" onClick={() => setOpen(false)}>{"<Projets/>"}</Link>
            </li>
            <li className="py-3 w-full text-center">
              <Link to="/contact" onClick={() => setOpen(false)}>{"<Contact/>"}</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
