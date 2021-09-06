import React from 'react';
import {
    HeroContainer,
    HeroBg,
    HeroImg,
    HeroContent,
    HeroH1,
    HeroP
} from './TokenHeroElements';

const TokenHeroSection = ({ id, c }) => {
    return (
        <HeroContainer id={id}>
            <HeroBg>
                <HeroImg src="./images/tokenBg.jpeg" />
            </HeroBg>
            <HeroContent>
                <HeroH1>{c.tokenTitle}</HeroH1>
                <HeroP>{c.tokenDescription}</HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default TokenHeroSection
