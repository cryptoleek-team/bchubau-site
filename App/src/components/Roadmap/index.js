import React from "react";
import {
    RoadmapContainer,
    TextWrapper,
    Heading,
    CardBox,
    Card,
    CardTitle,
    CardDesc
} from "./RoadmapElements"

const RoadmapSection = ({ c }) => {
    return (
        <RoadmapContainer>
            <TextWrapper>
                <Heading>{c.roadmapTitle}</Heading>

                <CardBox data-aos="fade-in">
                    {
                        c.roadmapDesc.map((item) => (
                            <Card key={item.id}>
                                <CardTitle>{item.date}</CardTitle>
                                {
                                    item.desc.map(desc => (
                                        <CardDesc key={desc}>{desc}</CardDesc>
                                    ))

                                }

                            </Card>
                        ))
                    }
                </CardBox>
            </TextWrapper>


        </RoadmapContainer>
    )
}

export default RoadmapSection