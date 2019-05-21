import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme.darkGrey};
    flex-direction: column;
    max-width: 100%;
    width: 250px; 
    margin: 10px auto;
    padding: 15px 20px;
`;

const H2 = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`;

const StyledTemperature = styled.div`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    margin: 30px auto;
`;

const StyledButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const City = ({city}) => (
    <StyledWrapper>
        <H2> {city.name} </H2>
        <StyledTemperature> {city.temp}°C </StyledTemperature>
        <StyledButtonsWrapper>
            <Button dark> Usuń </Button>
            <Button primary> Szczegóły </Button>
        </StyledButtonsWrapper> 
    </StyledWrapper>
);

export default City;