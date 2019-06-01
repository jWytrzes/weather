import React from 'react';
import styled from 'styled-components';
import BackButton from '../components/BackButton';
import UnitOptions from '../components/UnitOptions';
import Fade from 'react-reveal/Fade';

const StyledWrapper = styled.div`
    padding: 40px;
`;

const OptionsContainer = () => (
    <Fade duration={400}>
        <StyledWrapper>
            <BackButton> Powrót </BackButton>
            <UnitOptions />
        </StyledWrapper>
    </Fade>
)

export default OptionsContainer;