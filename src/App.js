import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AppHeader from './AppHeader';
import About from './about/About';
import Contact from './contact/Contact';
import Events from './events/Events';

const App = () => (
    <div className="app">
        <AppHeader className="app__app-header" />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/events" component={Events} />
    </div>
);

export default App;
