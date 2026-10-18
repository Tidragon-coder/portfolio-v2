import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import ScrollToTop from './components/atoms/ScrollToTop';

import Home from './components/pages/home';
import Projects from './components/pages/projects';
import ProjectPage from './components/molecules/ProjetPage';
import Contact from './components/pages/contact';
import Politique from './components/pages/politique';
import NotFound from './components/pages/notFound';

function App() {
  return (
    <div className='font-fira'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politique" element={<Politique />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
