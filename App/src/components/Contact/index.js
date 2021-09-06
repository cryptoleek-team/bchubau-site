import React from "react"
import { ContactContainer, TextWrapper, Heading, ContactIcon, IconWrap, ContactText } from "./ContactElement"
import MapBox from "./Mapbox"
import { FaTwitter, FaTelegram } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"
import { Grid } from '@material-ui/core';

const Contact = ({ c }) => {
    return (
        <ContactContainer>
            <TextWrapper>
                <Heading>{c.contactTitle}</Heading>

                <Grid container spacing={6} data-aos="fade-in">
                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center">
                        <MapBox />
                    </Grid>

                    <Grid container item sm={12} md={6} alignItems="center" justifyContent="center" spacing={1}>
                        <Grid container item sm={12}>
                            <IconWrap>
                                <ContactIcon>
                                    <MdLocationOn />
                                </ContactIcon>
                                <ContactText>{c.location}</ContactText>
                            </IconWrap>
                        </Grid>
                        <Grid container item sm={12}>
                            <IconWrap>
                                <ContactIcon href={c.twitter} target="_blank">
                                    <FaTwitter />
                                </ContactIcon>
                                <ContactText>{c.twitter}</ContactText>
                            </IconWrap>
                        </Grid>

                        <Grid container item sm={12}>
                            <IconWrap>
                                <ContactIcon href={c.telegram} target="_blank">
                                    <FaTelegram />
                                </ContactIcon>
                                <ContactText>{c.telegram}</ContactText>
                            </IconWrap>
                        </Grid>

                        <Grid container item sm={12}>
                            <IconWrap>
                                <ContactIcon href="mailto:auschainhub@gmail.com">
                                    <MdEmail />
                                </ContactIcon>
                                <ContactText>{c.email}</ContactText>
                            </IconWrap>
                        </Grid>
                    </Grid>
                </Grid>
            </TextWrapper>

        </ContactContainer>

    )

}

export default Contact
