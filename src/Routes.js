import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import Options from './pages/Options';
import Details from './pages/Details';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Index} />
            <Route path='/options' component={Options} />
            <Route path='/details' component={Details} />
        </Switch>
    </div>
)

export default Routes;