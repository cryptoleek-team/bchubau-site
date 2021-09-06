import React from 'react';
import {
    TextWrapper,
    Heading,
    CardContainer,
    CardImg,
    CardTitle,
    CardDesc,
} from './EventElements';
import { Button } from "../ButtonElements"
import { Grid } from '@material-ui/core';
import pe from "../../locales/previousEvents.json"
import styled from 'styled-components';

const StyledImg = styled(CardImg)`
     float: left;
     width:300px;
     height:200px;

    @media screen and (max-width: 768px) {
       float: none;
       width:100%;
       height:50%;
    }
`

const PreviousEventSection = ({ id, c }) => {
    const newPage = (url) => {
        const w = window.open('about:blank');
        w.location.href = url;
    }
    return (
        <TextWrapper>
            <Heading>{c.previousEventTitle}</Heading>
            <Grid container spacing={6} data-aos="fade in">
                {
                    pe.map((item, index) => (
                        <Grid item sm={12} md={6} key={index}>
                            <CardContainer>
                                <div style={{ padding: "20px" }}>
                                    <StyledImg src={item.images}></StyledImg>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardDesc style={{ marginLeft: "0px" }}>{item.description}</CardDesc>
                                    <Button onClick={() => newPage(item.url)}>View More</Button>
                                </div>
                            </CardContainer>
                        </Grid>
                    ))
                }

            </Grid>
        </TextWrapper >
    )
}
export default PreviousEventSection

