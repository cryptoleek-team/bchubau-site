import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EventsHeroSection from '../components/EventsHeroSection';
import EventSection from '../components/EventsSection';
import Footer from '../components/Footer';
import contents from '../locales/contents.json';

const Event = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} c={contents} />
            <Navbar toggle={toggle} c={contents} />
            <EventsHeroSection c={contents} />
            <EventSection c={contents} />
            <Footer />
        </>
    );
};

export default Event;

