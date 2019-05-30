import React from 'react';
//import { createStore } from 'redux';
import Routes from './Routes';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';

/* const initialState = {
    citiesList: [],
    celsiusDegrees: true,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT'
    }
}

const store = createStore(reducer);
 */

const App = () => ( 
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <Routes />
        </>
    </ThemeProvider>
);

export default App;