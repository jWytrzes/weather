import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        color: ${({ theme }) => theme.black };
        background: ${({ theme }) => theme.grey };
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }

    #root > div {
        height: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        ${({ theme }) => theme.mq.medium} {
            justify-content: center;
        }
    }
`;

export default GlobalStyle;