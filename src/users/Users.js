import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getUsers } from './usersSelectors';
import { requestUsers } from './usersActions';
import { createLink } from '../links/linksActions';

import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
   }

    componentDidMount() {
        this.props.requestUsers();
    }

    render() {
        return (
            <div className="users">
                <div className="users__title">
                    Follow these users
                </div>
                <ul className="users__list">
                    {
                        this.props.users.map(
                            user => <li className="users__list-item" key={ user.id }>
                                <button className="users__folow-user-button" onClick={ () => this.props.createLink(user.id) }>
                                    { user.name }
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: getUsers(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestUsers,
    createLink
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Users);
