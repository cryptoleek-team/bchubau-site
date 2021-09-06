import React from 'react';
import {
    HeroContainer,
    HeroBg,
    HeroImg,
    HeroContent,
    HeroH1,
    HeroP
} from './EventsHeroElements';

const EventsHeroSection = ({ id, c }) => {
    return (
        <HeroContainer id={id}>
            <HeroBg>
                <HeroImg src="./images/eventsBg.jpeg" />
            </HeroBg>
            <HeroContent>
                <HeroH1>{c.eventsTitle}</HeroH1>
                <HeroP>{c.eventsDescription}</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default EventsHeroSection
