import React from 'react';

import{
    PromoContainer,
    PromoBox,
    PromoWrapper,
    PromoTitle,
    PromoDesc
} from './PromoElements'

import {useCountUp} from 'react-countup';

const CountUp = (num,decimal) => {
    const { countUp } = useCountUp({
        start:0,
        end: num,
        decimals:decimal,
        duration:5
    });
    return <div>{countUp}</div>;
};
const PromoSection = ({c})=>{
    return(
        <PromoContainer>
            <PromoBox data-aos="fade-down">
                <PromoWrapper>
                    <PromoTitle>{CountUp(c.promoNumber1,0)}</PromoTitle>
                    <PromoDesc>{c.promoDesc1}</PromoDesc>
                </PromoWrapper>

                <PromoWrapper>
                    <PromoTitle>{CountUp(c.promoNumber2,0)}</PromoTitle>
                    <PromoDesc>{c.promoDesc2}</PromoDesc>
                </PromoWrapper>

                <PromoWrapper>
                    <PromoTitle>{CountUp(c.promoNumber3,0)}</PromoTitle>
                    <PromoDesc>{c.promoDesc3}</PromoDesc>
                </PromoWrapper>

                <PromoWrapper>
                    <PromoTitle>{CountUp(c.promoNumber4,1)}</PromoTitle>
                    <PromoDesc>{c.promoDesc4}</PromoDesc>
                </PromoWrapper>
            </PromoBox>
        </PromoContainer>
    )
}

export default PromoSection