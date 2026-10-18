// src/components/ui/molecules/Introduct.tsx
import profileImage from '../../assets/img/img_Theo2.jpg';
import { Link } from 'react-router-dom';
import { buttonClasses } from '../atoms/Button';

const Introduct = () => {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 max-w-6xl w-full">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/60 bg-secondary/10 px-4 py-1.5 text-xs sm:text-sm text-highlight">
            <span className="h-2 w-2 rounded-full bg-highlight animate-pulse" />
            Alternant chez Yuccan · MBA Full Stack
          </span>

          <h1 className="font-bold">
            <span className="block text-xl md:text-2xl text-white/80 mb-3">Salut, je m'appelle</span>
            <span className="block text-4xl sm:text-5xl md:text-7xl leading-tight bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">
              Théo Spetebroot
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl text-highlight mt-4">
              &lt;Développeur Full-Stack/&gt;
              <span className="inline-block ml-2 w-4 h-1 bg-white animate-pulse align-baseline" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/70 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Python / Django au quotidien, à l'aise en React / TypeScript. Je prends en charge
            les fonctionnalités de bout en bout, du cadrage à la livraison.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className={buttonClasses('primary')}
            >
              Voir mes projets
            </Link>
            <Link
              to="/contact"
              className={buttonClasses('outline')}
            >
              Me contacter
            </Link>
          </div>

          <div className="flex justify-center md:justify-start gap-5 pt-2 text-white/70">
            <a href="https://github.com/Tidragon-coder" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/th%C3%A9o-spetebroot/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
            </a>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-secondary blur-3xl opacity-40" />
          <img
            src={profileImage}
            alt="Théo Spetebroot"
            className="relative w-56 h-56 md:w-80 md:h-80 rounded-full object-cover object-top ring-4 ring-secondary/70 shadow-2xl animate-floating"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduct;
