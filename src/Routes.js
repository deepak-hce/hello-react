import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Register from './components/register/register';



export default function Routes() {
    return (
        <Switch>
            <Route path = "/register" component = {Register} />
            <Route path = "/" exact component = {Home} />
        </Switch>
    )
} 