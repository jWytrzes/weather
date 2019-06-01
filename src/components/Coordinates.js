import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 25px 0;
`;

const H5 = styled.h5`
    font-size: 14px;
    margin: 0 0 10px;
`;

/* const StyledLabel = styled.label`
    display: block;
    font-weight: 500;
    padding: 5px 0;
    cursor: pointer;
`; */

const Coordinates = ({cityInfo}) => (
    <StyledWrapper>
        <H5> Długość geograficzna </H5>
        <p>
           {cityInfo.lon}
        </p>
        <H5> Szerokość geograficzna </H5>
        <p>
            {cityInfo.lat}
        </p>
        <H5> Strefa czasowa </H5>
        <p>
            {cityInfo.timezone}
        </p>
    </StyledWrapper>
);

export default Coordinates;