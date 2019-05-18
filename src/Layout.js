import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/GlobalStyle';
import theme from './assets/styles/theme';

const Layout = ({children}) => (
    <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>{children}</>
        </ThemeProvider>
    </>
)

export default Layout;