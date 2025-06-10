import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Home from './components/pages/home';
import Projects from './components/pages/projects';
import Footer  from './components/organisms/footer';
import { Header } from './components/organisms/header';

function App() {
  return (
    <div className='font-fira'>
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
      

    </div>
)}

export default App;
