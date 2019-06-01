import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Coordinates from '../components/Coordinates';

const StyledWrapper = styled.div`
    padding: 40px;
`;

const OptionsContainer = ({cityInfo}) => (
    <StyledWrapper>
        <BackButton> Powrót </BackButton>
        <Coordinates cityInfo={cityInfo}/>
    </StyledWrapper>
)

export default OptionsContainer;