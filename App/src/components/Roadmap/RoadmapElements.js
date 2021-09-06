import styled from 'styled-components';

export const RoadmapContainer = styled.div`
  color: #f9f9f9;
  z-index: 11;
  padding: 50px 0;
  
  @media screen and (max-width:768px){
   padding: 24px;
  }
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

export const Card = styled.ul`
    padding: 30px;
    margin: 25px;
    border: 1px solid #f7f8f9;
    color: #070808;
    display: table-cell;
    background-color: #fff;
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    width:30%;

    @media screen and (max-width: 768px) {
      display:block;
      width:100%;
      margin:0 0 50px 0;
    }
`
export const CardTitle = styled.h3`
    margin:20px 0;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: #0a2663;
    text-align: left;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`


export const CardDesc = styled.li`
  font-size: 18px;
  font-weight: 300;
  color: #000;
  margin: 20px;
  text-align: left;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`


