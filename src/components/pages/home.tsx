import React from 'react';

import Introduc from '../molecules/introduc';
import AboutMe from '../molecules/aboutme';
import Projets from '../molecules/projets';
import HardSkills from '../molecules/hardSkill';
import Experience from '../molecules/experienceSection';

import Header from '../organisms/header';
import Footer from '../organisms/footer';
import usePageTitle from '../../hooks/usePageTitle';

const Home = () => {
    usePageTitle();

    return (
    <div>
    <Header />
        <Introduc />
        <AboutMe />
        <Projets />
        <HardSkills />
        <Experience />
    <Footer />
    </div>
    )
}

export default Home;
