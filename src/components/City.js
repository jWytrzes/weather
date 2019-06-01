import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './Button';
import LinkButton from './LinkButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Zoom from 'react-reveal/Zoom';

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

    ${({ theme }) => theme.mq.medium } {
        margin: 10px 35px;
    }
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

const City = ( props ) => {
    let temperature = props.celsiusDegrees ? 
    <span>{ (props.city.temperature - 273.15).toFixed(1)}°C</span> : 
        <span> {(props.city.temperature * 9/5 - 459.67).toFixed(1)}°F </span>;

    return (
        <Zoom duration={250}>
            <StyledWrapper>
                <H2> {props.city.name} </H2>
                <StyledTemperature> {temperature} </StyledTemperature>
                <StyledButtonsWrapper>
                    <Button dark onClick={() => props.deleteItem(props.mapId)} > <FontAwesomeIcon icon="ban"/> Usuń </Button>
                    <LinkButton 
                    to={{ pathname: '/details', 
                        state: {
                            cityInfo: props.city,
                        }
                    }}> 
                        Szczegóły 
                    </LinkButton>
                </StyledButtonsWrapper>
            </StyledWrapper>
        </Zoom>
    );
}

function mapStateToProps(state) {
    return {
        celsiusDegrees: state.celsiusDegrees
    };
}

export default connect(mapStateToProps)(City);