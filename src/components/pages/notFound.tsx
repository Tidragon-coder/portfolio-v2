import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../organisms/header';
import Footer from '../organisms/footer';
import { buttonClasses } from '../atoms/Button';
import usePageTitle from '../../hooks/usePageTitle';

import rocketImg from '../../assets/img/rocket.png';

const NotFound = () => {
  usePageTitle('Page introuvable');

  return (
    <div>
      <Header />
      <section className="min-h-[80vh] flex flex-col items-center justify-center gap-6 px-6 pt-32 pb-20 text-center">
        <img src={rocketImg} alt="" className="w-24 animate-floating" />
        <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-white to-highlight bg-clip-text text-transparent">404</p>
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-secondary">&lt;</span>Page introuvable<span className="text-secondary">/&gt;</span>
        </h1>
        <p className="text-white/70 max-w-md">
          Cette page s’est perdue quelque part dans l’espace. Elle n’existe pas ou a été déplacée.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link to="/" className={buttonClasses('primary')}>Retour à l’accueil</Link>
          <Link to="/projects" className={buttonClasses('outline')}>Voir mes projets</Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
