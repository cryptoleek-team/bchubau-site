import React from 'react';
import { FooterContain, FooterWrapper, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContain>
      <FooterWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights onClick={toggleHome}>Australia Blockchain Hub © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrapper>
    </FooterContain>
  )
}

export default Footer;


