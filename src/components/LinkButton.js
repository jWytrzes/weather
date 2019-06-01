import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled(Link)`
    text-decoration: none;
    font-family: inherit;
    padding: 8px 15px;
    border: 1px solid;
    border-color: ${({ theme, dark }) => dark ? theme.black : theme.primary};
    color: ${({ theme, dark }) => dark ? theme.black : theme.white};
    background:  ${({ theme}) => theme.primary};
    margin-left:2px;
    position: relative;
    overflow: hidden;

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

/* const Button = (props) => (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
) */

export default Button;