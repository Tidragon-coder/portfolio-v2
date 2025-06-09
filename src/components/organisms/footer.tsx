import React from 'react';
import logo from '../../assets/logo/logo_second.png';

import skillsIcons from '../../data/skillsIcons';

const Footer = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  return (
    <footer className="bg-[#0D0A4B] text-[#F0FBF7] py-8 text-center text-sm mt-12">
      <div className="flex flex-col items-center gap-4 px-4">
        <div className="w-[120px] mb-4">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-auto"
          />
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center gap-5">
            <li><a href="index.php" className="hover:text-[#3A6D8C] transition-colors">Accueil</a></li>
            <li><a href="index.php#projets" className="hover:text-[#3A6D8C] transition-colors">Projets</a></li>
            <li><a href="index.php#aproposdemoi" className="hover:text-[#3A6D8C] transition-colors">À propos de moi</a></li>
            <li><a href="contact.php" className="hover:text-[#3A6D8C] transition-colors">Contact</a></li>
          </ul>
        </nav>

        <div className="flex gap-4">
          <a href="https://github.com/Tidragon-coder" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#F0FBF7" d="M7.024 2.31a9 9 0 0 1 2.125 1.046A11.4 11.4 0 0 1 12 3c.993 0 1.951.124 2.849.355a9 9 0 0 1 2.124-1.045c.697-.237 1.69-.621 2.28.032c.4.444.5 1.188.571 1.756c.08.634.099 1.46-.111 2.28C20.516 7.415 21 8.652 21 10c0 2.042-1.106 3.815-2.743 5.043a9.5 9.5 0 0 1-2.59 1.356c.214.49.333 1.032.333 1.601v3a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.991c-.955.117-1.756.013-2.437-.276c-.712-.302-1.208-.77-1.581-1.218c-.354-.424-.74-1.38-1.298-1.566a1 1 0 0 1 .632-1.898c.666.222 1.1.702 1.397 1.088c.48.62.87 1.43 1.63 1.753c.313.133.772.22 1.49.122L8 17.98a4 4 0 0 1 .333-1.581a9.5 9.5 0 0 1-2.59-1.356C4.106 13.815 3 12.043 3 10c0-1.346.483-2.582 1.284-3.618c-.21-.82-.192-1.648-.112-2.283l.005-.038c.073-.582.158-1.267.566-1.719c.59-.653 1.584-.268 2.28-.031Z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/th%C3%A9o-spetebroot/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#F0FBF7" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
            </svg>
          </a>
          <a href="mailto:theo.spetebroot@gmail.com" className="hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
              <path fill="#F0FBF7" d="M14.608 12.172c0 .84.239 1.175.864 1.175c1.393 0 2.28-1.775 2.28-4.727c0-4.512-3.288-6.672-7.393-6.672c-4.223 0-8.064 2.832-8.064 8.184c0 5.112 3.36 7.896 8.52 7.896c1.752 0 2.928-.192 4.727-.792l.386 1.607c-1.776.577-3.674.744-5.137.744c-6.768 0-10.393-3.72-10.393-9.456c0-5.784 4.201-9.72 9.985-9.72c6.024 0 9.215 3.6 9.215 8.016c0 3.744-1.175 6.6-4.871 6.6c-1.681 0-2.784-.672-2.928-2.161c-.432 1.656-1.584 2.161-3.145 2.161c-2.088 0-3.84-1.609-3.84-4.848c0-3.264 1.537-5.28 4.297-5.28c1.464 0 2.376.576 2.782 1.488l.697-1.272h2.016v7.057z"/>
            </svg>
          </a>
        </div>

        <div className="w-full border-t border-[#3A6D8C] pt-4 text-xs">
          <p className="mb-1">
            © {month}/{year} Théo Spetebroot - Tous droits réservés -{' '}
            <a href="politique.php" className="underline text-[#F0FBF7] hover:text-[#3A6D8C] transition-colors">
              Politique de Confidentialité
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
