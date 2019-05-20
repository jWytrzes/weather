import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div`
    max-width: 1200px;
    width: 100%;
`;

const StyledTopBar = styled.div`
    background: ${({ theme }) => theme.primary };
    color: ${({ theme }) => theme.white};
    padding: 15px 15px 55px;
    display: flex;
    justify-content: space-between;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 8px 15px;
    border: 1px solid ${({ theme }) => theme.white};
`;

const Layout = ({children}) => (
    <StyledWrapper>
        <StyledTopBar>
            <div> Weather<b>Forecast</b> </div>
            <StyledLink to="/options"> Ustawienia </StyledLink>
        </StyledTopBar>
        {children}
    </StyledWrapper>
)

export default Layout;