import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    margin: 25px 0;
`;

const H5 = styled.h5`
    font-size: 14px;
    margin: 0 0 10px;
`;

const StyledLabel = styled.label`
    display: block;
    font-weight: 500;
    padding: 5px 0;
    cursor: pointer;
`;

const UnitOptions = () => (
    <StyledWrapper>
        <H5> Jednostka </H5>
        <div>
            <StyledLabel> <input type="radio" name="units" value="C" checked/> °C </StyledLabel>
            <StyledLabel> <input type="radio" name="units" value="F"/> °F </StyledLabel>
        </div>
    </StyledWrapper>	
);

export default UnitOptions;