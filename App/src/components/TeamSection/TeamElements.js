import styled from 'styled-components';

export const TeamContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 10px 0;

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

export const Topline = styled.p`
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
    display: table;
    width: 100%;
    border-collapse:separate;
    border-spacing:30px;

    @media screen and (max-width: 768px) {
      border-collapse:initial;
      border-spacing:0px;
    }
`

export const Card = styled.div`
    padding: 4.5em 2em 2em;
    margin: 30px;
    display: table-cell;
    border: 1px solid #f7f8f9;
    color: #070808;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    position:relative;
    width:33%;

    @media screen and (max-width: 768px) {
      display:block;
      width:100%;
      margin:30px 0 80px 0;
    }
`

export const CardImg = styled.img`
    width:100px;
    height:100px;
    border-radius:50%;
    position:absolute;
    top:0;
    left:50%;
    -ms-transform: translate(-50px, -50%);
    transform: translate(-50px, -50%);
`

export const CardTitle = styled.h3`
    margin-bottom:10px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #0a2663;
    text-align: center;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`

export const CardSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #0a2663;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const Line = styled.div`
  border:2px solid #0a2663;
  margin:10px auto;
  width:25px;
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