import { useState } from "react";
import logo from '../assets/logo/logo_second.png';

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'rgba(13, 10, 75, 0.8)' }} className="text-white p-4 py-8">
    <nav className="container mx-auto flex items-center relative">
        {/* Logo */}
        <div className="absolute left-0">
        <img
            src={logo}
            alt="Mon logo"
            className="h-20 w-auto"
        />
        </div>

  
        <ul className="hidden md:flex gap-[100px] text-xl mx-auto ml-[25%]">
          <li><a href="#accueil" className="relative text-white px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">{'<Accueil/>'}</a></li>
          <li><a href="#projets" className="relative text-white px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">{'<A propos de moi/>'}</a></li>
          <li><a href="#about" className="relative text-white px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">{'<Projets/>'}</a></li>
          <li><a href="#contact" className="relative text-white px-2 py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-[#4F7C77] after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100">{'<Contact/>'} </a></li>
        </ul>

        {/* Hamburger mobile */}
        <button 
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {/* simple icon burger */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>

        {/* Menu mobile */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-[#0D0A4B] flex flex-col items-center md:hidden">
            <li className="py-2"><a href="#accueil" onClick={() => setOpen(false)}>Accueil</a></li>
            <li className="py-2"><a href="#projets" onClick={() => setOpen(false)}>Projets</a></li>
            <li className="py-2"><a href="#about" onClick={() => setOpen(false)}>Qui suis-je ?</a></li>
            <li className="py-2"><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>
        )}
      </nav>
    </header>
  );
};
