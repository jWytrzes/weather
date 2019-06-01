import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const StyledButton = styled.button`
    text-decoration: none;
    font-family: inherit;
    padding: 8px 15px;
    border: 1px solid;
    border-color: ${({ theme}) => theme.primary };
    color: ${({ theme}) => theme.primary };
    background: none;
    margin-left:2px;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    display: inline-block;

    ::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        transform: scale(0);
        z-index: 10;
        transition: transform .15s ease-in-out;
        opacity: .2;
        background-color: ${({ theme }) => theme.primary};
        cursor: pointer;
    }

    :hover {
        ::after {
            transform: scale(1);
        }
    }
`;

const BackButton = (props) => {
    const goBack = () => {
        props.history.goBack();
    }

    return (
        <StyledButton {...props} onClick={goBack}>
            {'<'}
            {props.children}
        </StyledButton>
    ) 
}

export default withRouter(BackButton);