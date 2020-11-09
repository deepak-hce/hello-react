import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from './auth/PrivateRoute';

import Home from './components/home/home';
import Register from './components/register/register';
import Comment from './components/comment/comment';
import ProtectedRoute from './components/protectedRoute/protectedRoute';
import Flex from './components/flex/flex';




export default function Routes() {
    return (
        <Switch>
            <Redirect exact from="/" to="flex" />
            <Route path = "/flex" component = {Flex} />
            <Route path = "/register" component = {Register} />
            <Route path = "/" exact component = {Home} />
            <Route path = "/comment" exact component = {Comment} />
            <PrivateRoute path = "/protectedRoute" exact component = { ProtectedRoute } />
        </Switch>
    )
} 