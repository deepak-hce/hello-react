
import React from 'react';
import { Redirect, Route } from 'react-router-dom';


export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => localStorage.getItem('token') ?
            (<Component {...props} />) :
            // eslint-disable-next-line react/react-in-jsx-scope
            (<Redirect to={{
                pathname: "/",
                state: { from: props.location }
            }} />
            )} />
);

