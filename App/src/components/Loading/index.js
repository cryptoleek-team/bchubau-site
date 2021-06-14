import React from 'react';
import {
    TextWrapper,
    CardContainer,
    CardBox,
    ImgContainer,
    ContentContainer
} from './LoadingElements';
import Skeleton from '@material-ui/lab/Skeleton';

const LoadingCard =()=>{
    return(
        <TextWrapper>
        {
            Array(1)
                .fill()
                .map((item,index)=>(
                <CardContainer key={index}>
                    <CardBox>
                        <ImgContainer>
                            <Skeleton variant="rect" width="100%" height="100%"/>
                        </ImgContainer>

                        <ContentContainer>
                            <React.Fragment>
                                <Skeleton animation="wave" variant="rect" height="23%" style={{ marginBottom: 10 }} />
                                <Skeleton animation="wave" variant="rect" height="10%" style={{ marginBottom: 10 }}/>
                                <Skeleton animation="wave" variant="rect" height="10%" style={{ marginBottom: 10 }}/>
                                <Skeleton animation="wave" variant="rect" height="10%" style={{ marginBottom: 10 }}/>
                                <Skeleton animation="wave" variant="rect" height="10%" style={{ marginBottom: 10 }}/>
                                <Skeleton animation="wave" variant="rect" width="30%" height="20%"/>
                            </React.Fragment>
                        </ContentContainer> 
                    </CardBox>
                </CardContainer>
                ))
            }
        </TextWrapper>
    )

}

export default LoadingCard







