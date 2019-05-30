import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

const StyledWrapper = styled.form`
    max-width: 450px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
`;

const StyledInput = styled.input`
    background: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
    font-family: inherit;
    width: 100%;
    padding: 7px 10px;
    text-align: center;
    font-size: 16px;

    ::placeholder {
        color: ${({ theme }) => theme.white};
    }
`;

const InputField = ({onSubmit}) => {
    const [inputVal, setInputVal] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(inputVal);
    }

    return (
        <StyledWrapper id="searchInput" onSubmit={handleSubmit} >
            <StyledInput 
                type="text" 
                placeholder="Dodaj miasto" 
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}/>
            <Button type="submit" form="searchInput"> Dodaj </Button>
        </StyledWrapper>
    );
}

export default InputField;