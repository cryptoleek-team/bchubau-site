import React from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP
} from './HeroElements';

const HeroSection = ({ id, c }) => {
  return (
    <HeroContainer id={id}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>{c.title}</HeroH1>
        <HeroP>{c.description}</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection
