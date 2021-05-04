import styled from 'styled-components';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 700px;
  position: relative;
  z-index: 1;

  @media screen and (min-height: 800px) {
    height: 990px;
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity:0.6;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 92px;
  font-weight: 900;
  text-align: center;
  
  @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

`

export const HeroP =styled.p`
  color: #fff;
  font-size: 32px;
  text-align: center;
  margin: 50px 150px;
  line-height: 1.5;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 30px 10px;
  }
`
