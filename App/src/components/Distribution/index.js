import React from 'react';
import { Doughnut } from "react-chartjs-2";
import styled from 'styled-components';

const Container = styled.div`
    width:60%;

    @media screen and (max-width: 768px) {
        width:80%;
    }
`

const DistributionSection = ({ t }) => {
    const data = {
        labels: [
            "Airdrop",
            "Team/Advisor",
            "Community Reserve"
        ],
        datasets: [{
            data: [5, 35, 60],
            backgroundColor: [
                '#89c0fa',
                '#1f68b5',
                '#0a2663'
            ],
            hoverOffset: 4
        }],
    };
    return (
        <Container>
            <Doughnut data={data}></Doughnut>
        </Container>

    )
}

export default DistributionSection
