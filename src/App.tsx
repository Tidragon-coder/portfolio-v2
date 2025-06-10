import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/pages/home';
import Projects from './components/pages/projects';
import ProjectPage from './components/molecules/ProjetPage';

function App() {
  return (
    <div className='font-fira'>
      
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
      

    </div>
)}

export default App;
