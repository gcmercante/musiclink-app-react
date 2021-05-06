import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/login';
import SignUp from './pages/SignUp/signup';
import Home from './pages/Home/home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/home" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}