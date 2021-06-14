import styled from 'styled-components';

export const SerContent = styled.div`
  color: #fff;
  padding: 100px 0;
  background-image: linear-gradient( #07183d , #1f68b5);

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`

export const SerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height; 860px;
  width: 95%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding; 0 24px;
  justify-content: center;

  h1 {
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 25px;
    }
  }
`

export const SerWrap = styled.p`
  margin: 50px auto;
  font-size: 18px;
  font-weight: 300;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    margin: 30px 30px;
  }
`

export const SerRow = styled.div`
  margin: 0px auto;
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2';
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 0;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 30px;
  }
`

export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #89c0fa; 
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Subtitle = styled.p`
  // max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin: 0 15px;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  img {
    width: 80%;
    margin: 0 0 10px 0;
    padding-right: 0;
  }
`

export const Content = styled.p`
  margin: 0 auto;
  color: #89c0fa;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 300;
  text-align:center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`




