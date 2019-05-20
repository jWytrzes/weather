import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    text-decoration: none;
    color: ${({ theme }) => theme.white};
    font-family: inherit;
    padding: 8px 15px;
    border: 1px solid;
    border-color: ${({ dark }) => dark ? `${({ theme }) => theme.black}` : ' ${({ theme }) => theme.white}'};
    background: none;
    margin-left:2px;
`;

const Button = ({children, dark}) => (
    <StyledButton>
        {children}
    </StyledButton>
)

export default Button;