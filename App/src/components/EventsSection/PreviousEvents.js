import React from 'react';
import {
    TextWrapper,
    Heading,
    CardContainer,
    CardImg,
    CardTitle,
    CardDesc,
    CardBox,
} from './EventElements';
import { Button } from "../ButtonElements"
import { Grid } from '@material-ui/core';
import pe from "../../locales/previousEvents.json"

const PreviousEventSection = ({ id, c }) => {
    const newPage = (url) => {
        const w = window.open('about:blank');
        w.location.href = url;
    }
    return (
        <TextWrapper>
            <Heading>{c.previousEventTitle}</Heading>
            <Grid container>
                {
                    pe.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <CardContainer>
                                <CardBox>
                                    <CardImg src={item.images}></CardImg>
                                    <div>
                                        <CardTitle>{item.title}</CardTitle>
                                        <CardDesc style={{ marginLeft: "0px" }}>{item.description}</CardDesc>
                                        <Button onClick={() => newPage(item.url)}>View More</Button>
                                    </div>
                                </CardBox>
                            </CardContainer>
                        </Grid>
                    ))
                }

            </Grid>
        </TextWrapper >
    )
}
export default PreviousEventSection

