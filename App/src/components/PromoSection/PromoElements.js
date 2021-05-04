import styled from 'styled-components';

export const PromoContainer = styled.div`
  color: #fff;
  background-image: linear-gradient( #07183d , #1f68b5);
  padding: 20px 0 100px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

export const PromoBox = styled.div`
  display:flex;
  padding: 20px;
  flex-flow: row wrap;
`

export const PromoWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  flex: 0 0 15%;
  height:40px;
  align-items:center;

  @media screen and (max-width: 768px) {
    flex: 0 0 100%;
    height:150px;
  }
}
`

export const PromoTitle = styled.h2`
    color: #fff;
    font-size: 50px;
    text-align:center;
    margin:5px;

    @media screen and (max-width: 768px) {
    font-size:25px;
    }

`

export const PromoDesc = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  margin: 0 auto;
  text-align: center;
  margin:10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`