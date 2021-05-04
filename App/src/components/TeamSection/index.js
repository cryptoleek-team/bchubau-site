import React from 'react';
import {
    TeamContainer,
    TextWrapper,
    Heading,
    Topline,
    CardBox,
    Card,
    CardImg,
    CardTitle,
    CardDesc,
    CardSubtitle,
    Line
} from './TeamElements';

import protrait1 from "../../images/protrait.jpeg"
import protrait2 from "../../images/protrait.jpeg"
import protrait3 from "../../images/protrait.jpeg"
import protrait4 from "../../images/protrait.jpeg"
import protrait5 from "../../images/protrait.jpeg"
import protrait6 from "../../images/protrait.jpeg"


const TeamSection = ({c,id})=>{
    return(
        <TeamContainer id={id}>
            <TextWrapper>
                <div>
                    <Heading>{c.teamTitle}</Heading>
                    <Topline data-aos="fade-down">{c.teamSubtitle}</Topline>
                </div>

                    <CardBox data-aos="fade-down">
                        <Card>
                            <div>
                                 <CardImg src={protrait1}></CardImg>
                            </div>
                            <CardTitle>{c.memberName1}</CardTitle>
                            <CardSubtitle>{c.memberRole1}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc1}</CardDesc>
                        </Card>

                        <Card>
                            <div>
                                 <CardImg src={protrait2}></CardImg>
                            </div>
                            <CardTitle>{c.memberName2}</CardTitle>
                            <CardSubtitle>{c.memberRole2}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc2}</CardDesc>
                        </Card>


                        <Card>
                            <div>
                                 <CardImg src={protrait3}></CardImg>
                            </div>
                            <CardTitle>{c.memberName3}</CardTitle>
                            <CardSubtitle>{c.memberRole3}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc3}</CardDesc>
                        </Card>

                        <Card>
                            <div>
                                 <CardImg src={protrait4}></CardImg>
                            </div>
                            <CardTitle>{c.memberName4}</CardTitle>
                            <CardSubtitle>{c.memberRole4}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc4}</CardDesc>
                        </Card>


                        <Card>
                            <div>
                                 <CardImg src={protrait5}></CardImg>
                            </div>
                            <CardTitle>{c.memberName5}</CardTitle>
                            <CardSubtitle>{c.memberRole5}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc5}</CardDesc>
                        </Card>

                        <Card>
                            <div>
                                 <CardImg src={protrait6}></CardImg>
                            </div>
                            <CardTitle>{c.memberName6}</CardTitle>
                            <CardSubtitle>{c.memberRole6}</CardSubtitle>
                            <Line></Line>
                            <CardDesc>{c.memberDesc6}</CardDesc>
                        </Card>
                    </CardBox>
            </TextWrapper>
        </TeamContainer>
    )

}

export default TeamSection;