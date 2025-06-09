import React from 'react';
import { Header } from '../organisms/header';

import Introduc from '../molecules/introduc';
import AboutMe from '../molecules/aboutme';
import Projets from '../molecules/projets';
import HardSkills from '../molecules/hardSkill';
const Home = () => {
    return (
    <div>
        <Header />
        <Introduc />
        <AboutMe />
        <Projets />
        <HardSkills />

    </div>
    )
}

export default Home;
