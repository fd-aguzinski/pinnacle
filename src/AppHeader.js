import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo/Logo';

import './AppHeader.css';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-header">
                <div className="app-header-logo">
                    Pinnacle
                </div>
                <ul className="app-header-menu">
                    <li className="app-header__menu-item">
                        <Link className="app-header__menu-item-link" to="/">Home</Link>
                    </li>
                    <li className="app-header__menu-item">
                        <Link className="app-header__menu-item-link" to="/events">Events</Link>
                    </li>
                    <li className="app-header__menu-item">
                        <Link className="app-header__menu-item-link" to="/about">About</Link>
                    </li>
                    <li className="app-header__menu-item">
                        <Link className="app-header__menu-item-link" to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        );
    };
};

export default AppHeader;