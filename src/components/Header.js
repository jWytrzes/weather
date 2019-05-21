import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: ${({ theme }) => theme.secondary};
    padding: 20px 15px;
    color: ${({ theme }) => theme.white };

    h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
`;

const Header = ({children}) => (
    <StyledHeader>
        {children}
    </StyledHeader>
);

export default Header;