import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InforSection from '../components/InforSection';
import Contact from '../components/Contact';
import Career from '../components/Career';
import Footer from '../components/Footer';
import contents from '../locales/contents.json';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} c={contents} />
      <Navbar toggle={toggle} c={contents} />
      <HeroSection c={contents} />
      <InforSection c={contents} />
      <Contact c={contents} />
      <Career c={contents} />
      <Footer />
    </>
  );
};

export default Home;
