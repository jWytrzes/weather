import React from 'react';
import styled from 'styled-components';
import City from './City';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;

    ${({ theme }) => theme.mq.medium } {
        flex-direction: row;
    }
`;

const Cities = ({items}) => (
    <StyledWrapper>
        {items.map((item) => <City city={item} key={item.name}/>)}
    </StyledWrapper>
);

export default Cities;