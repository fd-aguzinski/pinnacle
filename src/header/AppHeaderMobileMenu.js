import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './AppHeaderMobileMenu.css';

class AppHeaderMobileMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayMobileDropdown: true
        };

        this.onMobileMenuClick = this.onMobileMenuClick.bind(this);
    }

    onMobileMenuClick(event) {
        this.setState({ displayMobileDropdown: !this.state.displayMobileDropdown });
    }

    render() {
        return (
            <div className="app-header-menu--mobile-div">
                <div onClick={ this.onMobileMenuClick } className="app-header-menu app-header-menu--mobile">
                    <i className="fa fa-bars fa-2x"></i>
                </div>
                { this.state.displayMobileDropdown ?
                    <div>
                        HELLO
                    </div>
                    :
                    null
                }
            </div>
        );
    };
};

export default AppHeaderMobileMenu;