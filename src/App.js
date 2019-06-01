import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import GlobalStyle from './assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Options from './pages/Options';
import Details from './pages/Details';

const initialState = {
    celsiusDegrees: localStorage.getItem('unit')==='F' ? false : true,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CHANGE_UNIT':
            return {
                celsiusDegrees: !state.celsiusDegrees
            };
        default:
            return state;
    }
}

const store = createStore(reducer); 

const App = () => ( 
    <Provider store={ store }>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <div>
                    <Switch>
                        <Route exact path='/' component={Index} />
                        <Route path='/options' component={Options} />
                        <Route path='/details' component={Details} />
                    </Switch>
                </div>
            </>
        </ThemeProvider>
    </Provider>
);

export default App;