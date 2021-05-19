import React from 'react';
import {
  InfoContainer,
  TextWrapper,
  TopLine,
  Heading,
  CardBox,
  Card,
  CardImgContainer,
  CardImg,
  CardTitle,
  CardDesc,
} from './InforElements';
import feature1 from '../../images/blockchain.png';
import feature2 from '../../images/global.png';
import feature3 from '../../images/meetup.png';
import feature4 from '../../images/events.png';
import feature5 from '../../images/launchpad.png';
import feature6 from '../../images/profession.png';
import PromoSection from '../PromoSection'


const InforSection = ({ id, c}) => {

  return (
    <div id={id}>
    <InfoContainer  >
      <TextWrapper >
        <div>
          <Heading>{c.introduction}</Heading>
          <TopLine data-aos="fade-down">{c.intro1}</TopLine>
          <TopLine data-aos="fade-down">{c.intro2}</TopLine>
        </div>

        <div data-aos="fade-down">
          <CardBox>
            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature1}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature1}</CardTitle>
                <CardDesc>{c.feature1Desc}</CardDesc>
            </Card>

            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature2}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature2}</CardTitle>
                <CardDesc>{c.feature2Desc}</CardDesc>
            </Card>
          </CardBox>

          <CardBox>
            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature3}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature3}</CardTitle>
                <CardDesc>{c.feature3Desc}</CardDesc>
            </Card>

            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature4}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature4}</CardTitle>
                <CardDesc>{c.feature4Desc}</CardDesc>
            </Card>
          </CardBox>

          <CardBox>
            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature5}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature5}</CardTitle>
                <CardDesc>{c.feature5Desc}</CardDesc>
            </Card>

            <Card>
                <div style={{position:'absolute', top: -30, left: 30}}>
                    <CardImgContainer>
                        <CardImg src={feature6}></CardImg>
                    </CardImgContainer>
                </div>
                <CardTitle>{c.feature6}</CardTitle>
                <CardDesc>{c.feature6Desc}</CardDesc>
            </Card>
          </CardBox>
        </div>
      </TextWrapper>
    </InfoContainer>
    <PromoSection c={c}></PromoSection>
    </div>
  )
}

export default InforSection;
