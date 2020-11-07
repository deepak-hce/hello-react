import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';

import Home from './components/home/home';
import Register from './components/register/register';
import Comment from './components/comment/comment';
import ProtectedRoute from './components/protectedRoute/protectedRoute';



export default function Routes() {
    return (
        <Switch>
            <Route path = "/flex" component = {Register} />
            <Route path = "/register" component = {Register} />
            <Route path = "/" exact component = {Home} />
            <Route path = "/comment" exact component = {Comment} />
            <PrivateRoute path = "/protectedRoute" exact component = { ProtectedRoute } />
        </Switch>
    )
} 