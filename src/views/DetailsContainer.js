import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import Coordinates from '../components/Coordinates';

const StyledWrapper = styled.div`
    padding: 40px;
`;

const OptionsContainer = () => (
    <StyledWrapper>
        <BackButton> Powrót </BackButton>
        <Coordinates />
    </StyledWrapper>
)

export default OptionsContainer;