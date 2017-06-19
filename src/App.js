import React from 'react';
import './App.css';
import Login from './account/Login';
import { Route, Link } from 'react-router-dom';
import AppHeader from './AppHeader';
import SwagBase from './swag_base/SwagBase';
import SignUp from './account/SignUp';

const App = () => (
    <div className="app">
        <AppHeader className="app__app-header" />
        {/*<Route exact path="/" component={Login} />*/}
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/swag-base" component={SwagBase} />
    </div>
);

export default App;
