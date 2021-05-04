import styled from 'styled-components';

export const SerContent = styled.div`
  color: #fff;
  background-image: linear-gradient( #220C4A , #8167A5);
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`

export const SerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height; 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding; 0 24px;
  justify-content: center;

  h1 {
    margin-bottom: 14px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff; 
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 25px;
      margin: 0 15px;
    }
  }
`

export const SerWrap = styled.p`
  margin: 50px auto;
  font-size: 18px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    margin: 30px auto;
  }
`

export const SerRow = styled.div`
  margin: 0px auto;
  display: grid;
  grid-auto-columns: minmax(auto,1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col2 col2' 'col1 col1';
  }
`

export const Column1 = styled.div`
  margin: 15px auto;
  padding: 0 80px;
  grid-area: col1;
  text-align: ${({ left }) => (left ? 'right' : 'left')};

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 0 35px;
  }
`

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const Text = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const TopLine = styled.p`
  color: #e2c3ff;
  font-size: 22px;
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: 1.4;
  text-transform: uppercase;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`

export const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
  line-height: 1.5;
  font-weight: 500;
  color: #f7f8fa; 

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 1.5;
  color: #fff;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'flex-end')};
  vertical-align: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  img {
    width: 40%;
    margin: 0 0 10px 0;
    padding-right: 0; 
  }
`