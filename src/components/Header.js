import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: ${({ theme }) => theme.secondary};
    padding: 20px 15px;
`;

const Header = ({children}) => (
    <StyledHeader>
        {children}
    </StyledHeader>
);

export default Header;