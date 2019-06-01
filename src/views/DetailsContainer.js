import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import BackButton from '../components/BackButton';
import Coordinates from '../components/Coordinates';

const StyledWrapper = styled.div`
    padding: 40px;
`;

const OptionsContainer = ({cityInfo}) => (
    <Fade duration={400}>
        <StyledWrapper>
            <BackButton> Powrót </BackButton>
            <Coordinates cityInfo={cityInfo} />
        </StyledWrapper>
    </Fade>
)

export default OptionsContainer;