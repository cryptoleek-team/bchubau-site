import React from 'react';
import {
  SerContent,
  SerWrapper,
  SerWrap,
  SerRow,
  Column1,
  Column2,
  Text,
  Content,
  Heading,
  Subtitle,
  ImgWrap
} from './CareerElements';
import img1 from '../../images/Company.png';


const Career = ({ id, c}) => {
  return (
    <SerContent id={id}>
      <SerWrapper>
        <h1>{c.join}</h1>
        <SerWrap >{c.joinSerwrap}</SerWrap>
        <SerRow imgStart={true} data-aos="fade-in">
          <Column1>
            <Text>
              <Heading>{c.whyJoinUs}</Heading>
              <Subtitle>{c.whyJoinUsDesc}</Subtitle>
            </Text>
          </Column1>
          <Column2>
            <ImgWrap>
              <img src={img1} alt='' />
            </ImgWrap>
          </Column2>
        </SerRow>
        <Content>{c.joinUsNow}</Content>
      </SerWrapper>
    </SerContent>
  )
}

export default Career
