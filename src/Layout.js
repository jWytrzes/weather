import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledWrapper = styled.div`
    width: 100%;

    ${({ theme }) => theme.mq.medium} {
        max-width: 90%;
        margin: 0 auto;
        background: ${({ theme }) => theme.white};
        box-shadow: ${({ theme }) => theme.shadow};
    }

    ${({ theme }) => theme.mq.big} {
        max-width: 1200px;
    }
`;

const StyledTopBar = styled.div`
    background: ${({ theme }) => theme.primary };
    color: ${({ theme }) => theme.white};
    padding: 15px 15px 55px;
    display: flex;
    justify-content: space-between;
`;

const StyledLogo = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 8px 15px;
    border: 1px solid ${({ theme }) => theme.white};
    position: relative;
    height: fit-content;

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
        background-color: ${({ theme, dark }) => dark ? theme.primary : theme.white};
        cursor: pointer;
    }

    :hover {
        ::after {
            transform: scale(1);
        }
    }
`;

const Layout = ({children}) => (
    <StyledWrapper>
        <StyledTopBar>
            <StyledLogo> 
                <FontAwesomeIcon icon="cloud-sun-rain" style={{fontSize: '50px', marginRight: '10px'}}/>
                <span>
                    Weather <br/> <b> Forecast</b>
                </span>
            </StyledLogo>
            <StyledLink to="/options"> <FontAwesomeIcon icon="cogs"/> Ustawienia </StyledLink>
        </StyledTopBar>
        <main>
            {children} 
        </main>
    </StyledWrapper>
)

export default Layout;