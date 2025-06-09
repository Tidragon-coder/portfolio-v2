import React from 'react';
// import { Header } from '../organisms/header';
// import Footer from '../organisms/footer';   

import Introduc from '../molecules/introduc';
import AboutMe from '../molecules/aboutme';
import Projets from '../molecules/projets';
import HardSkills from '../molecules/hardSkill';
import Experience from '../molecules/experienceSection';
const Home = () => {
    return (
    <div>    
        <Introduc />
        <AboutMe />
        <Projets />
        <HardSkills />
        <Experience />
    </div>
    )
}

export default Home;
