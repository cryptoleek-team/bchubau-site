import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 100px 0;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 90%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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

export const TopLine = styled.p`
  color: black;
  font-size: 18px;
  margin: 30px 150px;
  line-height: 1.5;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 30px auto;
  }
`
export const CardBox = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items:center;
    justify-content:center;
    position:relative;
    margin-top:50px;
`

export const Card = styled.div`
    padding: 4.5em 2em 2em;
    margin: 25px;
    border: 1px solid #f7f8f9;
    color: #070808;
    flex: 0 0 40%;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    position:relative;
    height:300px;

    @media screen and (min-device-width: 768px) and (max-device-width: 1440px) {
        height:400px;
    }

    @media screen and (max-width: 768px) {
        flex: 0 0 100%;
        height:380px;
    }
`

export const CardImgContainer = styled.div`
    width:60px;
    height:60px;
    border-radius:50%;
    background-color:#f0f0f5;
    position:relative;

`

export const CardImg = styled.img`
    width:30px;
    height:30px;
    position:absolute;
    top:15px;
    left:15px;
`

export const CardTitle = styled.h3`
    margin-bottom:20px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #0a2663;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`

export const CardDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 0 auto;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

