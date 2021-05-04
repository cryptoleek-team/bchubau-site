import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContain = styled.footer`
  background: #1f68b5;
`

export const FooterWrapper = styled.div`
  padding: 0 24px 20px 24px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 20px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction:column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-size:12px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin-top: -10px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 18px;
`

