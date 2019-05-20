import React from 'react';
import Routes from './Routes';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

const App = () => ( 
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Routes />
        </>
    </ThemeProvider>
);

export default App;