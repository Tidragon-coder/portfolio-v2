import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#0D0A4B] text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MonLogo</div>
        
        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          <li><a href="#accueil" className="hover:underline">Accueil</a></li>
          <li><a href="#projets" className="hover:underline">Projets</a></li>
          <li><a href="#about" className="hover:underline">Qui suis-je ?</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
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
