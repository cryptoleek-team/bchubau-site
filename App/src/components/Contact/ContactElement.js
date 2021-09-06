import styled from 'styled-components';

export const ContactContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 50px 0;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 80%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top:20px;

  @media screen and (max-width: 1440px) {
    max-width: 90%;
  }
}
`

export const Heading = styled.h2`
  margin-bottom: 50px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #0a2663;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContactIcon = styled.a`
  color: #0a2663;
  cursor: pointer;
  text-decoration: none;
  font-size:40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

export const ContactText = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  text-align: left;
  margin-left: 10px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`