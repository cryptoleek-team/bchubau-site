import React, { useRef } from 'react';
import {
  SerContent,
  SerWrapper,
  SerWrap,
  SerRow,
  Column1,
  Column2,
  Text,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap
} from './ServiceElements'
import { Button } from '../ButtonElements';
import img from '../../images/crypto3.png';
import img1 from '../../images/investment1.png';
import img2 from '../../images/blocWallet.png';
import img3 from '../../images/nft.png';
import img4 from '../../images/social.png';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const SerSection = ({ id, c }) => {
  const typeformEmbed = useRef(null);
  
  const newPage = () => {
    const w=window.open('about:blank');
    w.location.href='https://www.xpdax.com/'
  }
  
  const openForm =()=>{
    typeformEmbed.current.typeform.open();
  }

  return (
    <>
      <SerContent id={id}>
      <ReactTypeformEmbed
          popup
          autoOpen={false}
          url="https://yockwqcrv0b.typeform.com/to/gycUPJQi"
          hideHeaders
          hideFooter
          style={{ top: 100 }}
          ref={typeformEmbed}
        />
        <SerWrapper>
          <h1>{c.section3}</h1>
          <SerWrap>{c.section3SerWrap}</SerWrap>
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{c.toplineAdd1}</TopLine>
                <Heading>{c.toplineAH}</Heading>
                <Subtitle>{c.subtitleA}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    onClick={newPage}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {c.startBtn}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true} data-aos="fade-in">
            <Column1 left={false}>
              <Text>
                <TopLine>{c.topline1}</TopLine>
                <Heading>{c.topline1H}</Heading>
                <Subtitle>{c.subtitle1}</Subtitle>
                <BtnWrap left={true}>
                  <Button
                    onClick={openForm}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {c.investBtn}</Button>
                </BtnWrap>
              </Text>
            </Column1 >
            <Column2>
              <ImgWrap>
                <img src={img1} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow >
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{c.topline2}</TopLine>
                <Heading>{c.topline2H}</Heading>
                <Subtitle>{c.subtitle2}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {c.soonBtn}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img2} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={true} data-aos="fade-in">
            <Column1 left={false}>
              <Text>
                <TopLine>{c.topline3}</TopLine>
                <Heading>{c.topline3H}</Heading>
                <Subtitle>{c.subtitle3}</Subtitle>
                <BtnWrap left={true}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {c.soonBtn}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img4} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <SerRow imgStart={false} data-aos="fade-in">
            <Column1 left={true}>
              <Text>
                <TopLine>{c.topline4}</TopLine>
                <Heading>{c.topline4H}</Heading>
                <Subtitle>{c.subtitle4}</Subtitle>
                <BtnWrap left={false}>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                  >
                    {c.soonBtn}</Button>
                </BtnWrap>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={img3} alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
        </SerWrapper>
      </SerContent>
    </>
  )
}

export default SerSection;
