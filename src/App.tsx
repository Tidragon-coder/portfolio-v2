import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/pages/home';
import Footer  from './components/organisms/footer';

import { Header } from './components/organisms/header';

function App() {
  return (
    <div className='font-fira'>
      <Header />
      <Home/> 
      <Footer />

    </div>
)}

export default App;
