import React from "react";
import {
    InfoContainer,
    TextWrapper,
    Heading,
    Card,
    CardDesc
} from "./TokenomicsElements"

import DistributionSection from "../Distribution";

import { Grid } from "@material-ui/core"
const TokenomicsSection = ({ c }) => {
    return (
        <InfoContainer>
            <TextWrapper>
                <Heading>{c.tokenomicsTitle}</Heading>
                <Grid container spacing={3}>
                    <Grid container item sm={12} md={6} alignItems="flex-start" justifyContent="center" data-aos="fade-right">
                        <Card>
                            {
                                c.tokenomicsDesc.map(item => (
                                    <CardDesc key={item}>{item}</CardDesc>
                                ))
                            }
                        </Card>
                    </Grid>

                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center" data-aos="fade-left">
                        <DistributionSection />
                    </Grid>
                </Grid>


            </TextWrapper>
        </InfoContainer>
    )


}

export default TokenomicsSection