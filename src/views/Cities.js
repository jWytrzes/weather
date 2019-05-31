import React from 'react';
import styled from 'styled-components';
import City from '../components/City';

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;

    ${({ theme }) => theme.mq.medium } {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

const Cities = ({items, deleteCity}) => {
    return (
        <StyledWrapper>
            {items.map((item, i) => <City city={item} mapId={i} deleteItem={id => deleteCity(id)} key={item.name} />)}
        </StyledWrapper>
    );
}

export default Cities;