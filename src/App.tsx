import React from 'react';
import './App.css';
import Home from './components/pages/home';
import Footer  from './components/organisms/footer';

import { Header } from './components/organisms/header';

import useScrollAppear from "./hooks/useScrollAppear";

function App() {
  useScrollAppear();

  return (
    <div className='font-fira'>
      <Header />
      <Home/> 
      <Footer />
    </div>
)}

export default App;
