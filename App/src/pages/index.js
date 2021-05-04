import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import EventSection from '../components/EventsSection';
import TeamSection from "../components/TeamSection"
import Career from '../components/Career';
import Footer from '../components/Footer';
import contents from '../locales/contents.json';

import Aos from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({ 
      duration: 2000,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} c={contents}/>
      <Navbar toggle={toggle} c={contents}/>
      <HeroSection  id='home' c={contents}/>
      <InforSection id='about' c={contents}/>
      <EventSection id='events' c={contents} />
      <TeamSection id="team" c={contents}/>
      <Career id='career' c={contents}/> 
      <Footer />
    </>
  );
};

export default Home;
