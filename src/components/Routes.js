import React from 'react';
import Home from './Home';
import {Switch, Route} from 'react-router-dom';


const Routes = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />

        </Switch>
    </main>

)

export default Routes;