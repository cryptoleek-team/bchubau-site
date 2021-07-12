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
import PromoSection from '../PromoSection'

const InforSection = ({ id, c }) => {

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
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/blockchain.png"></CardImg>
                  </CardImgContainer>
                </div>
                <CardTitle>{c.feature1}</CardTitle>
                <CardDesc>{c.feature1Desc}</CardDesc>
              </Card>

              <Card>
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/global.png"></CardImg>
                  </CardImgContainer>
                </div>
                <CardTitle>{c.feature2}</CardTitle>
                <CardDesc>{c.feature2Desc}</CardDesc>
              </Card>
            </CardBox>

            <CardBox>
              <Card>
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/meetup.png"></CardImg>
                  </CardImgContainer>
                </div>
                <CardTitle>{c.feature3}</CardTitle>
                <CardDesc>{c.feature3Desc}</CardDesc>
              </Card>

              <Card>
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/events.png"></CardImg>
                  </CardImgContainer>
                </div>
                <CardTitle>{c.feature4}</CardTitle>
                <CardDesc>{c.feature4Desc}</CardDesc>
              </Card>
            </CardBox>

            <CardBox>
              <Card>
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/launchpad.png"></CardImg>
                  </CardImgContainer>
                </div>
                <CardTitle>{c.feature5}</CardTitle>
                <CardDesc>{c.feature5Desc}</CardDesc>
              </Card>

              <Card>
                <div style={{ position: 'absolute', top: -30, left: 30 }}>
                  <CardImgContainer>
                    <CardImg src="./images/icon/profession.png"></CardImg>
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
