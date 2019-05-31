import styled from 'styled-components';

const Button = styled.button`
    text-decoration: none;
    font-family: inherit;
    padding: 8px 15px;
    border: 1px solid;
    border-color: ${({ theme, dark, primary }) => dark ? theme.black : primary ? theme.primary : theme.white };
    color: ${({ theme, dark }) => dark ? theme.black : theme.white };
    background:  ${({ theme, primary }) => primary ? theme.primary : 'none' };
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