import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const UnitOptions = (props) => {
    const radioChange = () => {
        props.dispatch({ type: 'CHANGE_UNIT' });
    }

    console.log(props.celsiusDegrees);

    return (
        <StyledWrapper>
            <H5> Jednostka </H5>
            <div>
                <StyledLabel> <input type="radio" name="units" value="C" onChange={radioChange} checked={props.celsiusDegrees} /> °C </StyledLabel>
                <StyledLabel> <input type="radio" name="units" value="F" onChange={radioChange} checked={!props.celsiusDegrees}/> °F </StyledLabel>
            </div>
        </StyledWrapper>
    );
}

function mapStateToProps(state) {
    return {
        celsiusDegrees: state.celsiusDegrees
    };
}


export default connect(mapStateToProps)(UnitOptions);