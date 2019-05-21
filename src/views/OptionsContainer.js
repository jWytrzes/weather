import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import UnitOptions from '../components/UnitOptions';

const StyledWrapper = styled.div`
    padding: 40px;
`;

const OptionsContainer = () => (
    <StyledWrapper>
        <BackButton> Powrót </BackButton>
        <UnitOptions />
    </StyledWrapper>
)

export default OptionsContainer;