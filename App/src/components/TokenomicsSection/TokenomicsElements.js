import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 10px 0;
`

export const TextWrapper = styled.div`
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width:1440px){
    max-width:100%;
  }
}
`

export const Heading = styled.h2`
  margin-bottom: 14px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #0a2663;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 25px;
  }
`

export const Subheading = styled.h3`
  margin-bottom: 10px;
  font-size: 25px;
  line-height: 1.1;
  font-weight: 500;
  color: #0a2663;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`

export const Card = styled.ul`
    padding: 40px;
    margin: 25px;
    border: 1px solid #f7f8f9;
    color: #070808;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
`

export const CardDesc = styled.li`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 5px auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`