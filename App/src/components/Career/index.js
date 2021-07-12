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

const Career = ({ id, c }) => {
  return (
    <SerContent id={id}>
      <SerWrapper >
        <h1>{c.join}</h1>
        <div>
          <SerWrap >{c.joinSerwrap}</SerWrap>
          <SerRow imgStart={true}>
            <Column1>
              <Text>
                <Heading>{c.whyJoinUs}</Heading>
                <Subtitle>{c.whyJoinUsDesc}</Subtitle>
              </Text>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src="./images/Company.png" alt='' />
              </ImgWrap>
            </Column2>
          </SerRow>
          <Content>{c.joinUsNow}</Content>
        </div>
      </SerWrapper>
    </SerContent>
  )
}

export default Career
