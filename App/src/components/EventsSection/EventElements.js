import styled from 'styled-components';

export const EventContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 100px 0;

  @media screen and (max-width: 480px) {
    padding: 50px 0;
  }
`

export const TextWrapper = styled.div`
  max-width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 1440px) {
    max-width: 90%;
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

export const CardContainer = styled.div`
  border: 1px solid #f7f8f9;
  color: #070808;
  background-color: #fff;
  box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
  margin-top:20px;
  
`

export const CardBox = styled.div`
   display:flex;
   align-items:center;
   padding:20px;

   @media screen and (max-width: 768px) {
    flex-direction:column;
  }

`

export const CardImg = styled.img`
    width:45%;
    height:300px;
    margin-right:20px;
    display:flex;

    @media screen and (max-width: 768px) {
      width:100%;
      height:200px;
      margin-right:0px;
      margin-bottom:20px;
    }
`

export const CardTitle = styled.h3`
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #0a2663;
    text-align: left;
    margin-bottom:10px;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`

export const Icon = styled.div`
    color:#0a2663;
    font-size:18px;
    align-items:center;
    display:flex;

    @media screen and (max-width: 480px) {
      font-size: 16px;
    }
`

export const IconContainer = styled.div`
    display:flex;
    margin-top:10px;
`

export const CardDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  text-align: left;
  margin-left: 10px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`