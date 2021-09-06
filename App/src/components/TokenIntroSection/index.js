import React from "react";
import {
    IntroContainer,
    TextWrapper,
    Heading,
    Card,
    CardDesc,
    Subheading
} from "./TokenIntroElements"

import { Grid } from "@material-ui/core"

const TokenIntro = ({ c }) => {
    return (
        <IntroContainer>
            <TextWrapper>
                <Heading>{c.tokenIntroTitle}</Heading>
                <Grid container spacing={3}>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center" data-aos="fade-right">
                        <img src="./images/token.png" alt="token" style={{ width: "300px" }} />
                    </Grid>
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center" data-aos="fade-left">
                        <Card>
                            <Subheading>Bub token uses for:</Subheading>
                            {
                                c.tokenUse.map((item) => (
                                    <CardDesc key={item}>{item}</CardDesc>
                                ))
                            }
                        </Card>
                    </Grid>


                </Grid>


            </TextWrapper>
        </IntroContainer>
    )


}

export default TokenIntro