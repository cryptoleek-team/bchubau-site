import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import contents from '../locales/contents.json';
import TokenHeroSection from '../components/TokenHeroSection';
import TokenIntro from '../components/TokenIntroSection';
import TokenomicsSection from '../components/TokenomicsSection';
import RoadmapSection from '../components/Roadmap';

const Token = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} c={contents} />
            <Navbar toggle={toggle} c={contents} />
            <TokenHeroSection c={contents} />
            <TokenIntro c={contents} />
            <TokenomicsSection c={contents} />
            <RoadmapSection c={contents} />
            <Footer />
        </>
    );
};

export default Token;