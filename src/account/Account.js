import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getFollowing } from '../links/linksActions';
import { getAccountUser } from './accountSelectors';
import { getAccountFollowings } from '../links/linksSelectors';

import './Account.css';

class Account extends Component {
    constructor(props) {
        super(props);
   }

    componentDidMount() {
        this.props.getFollowing();
    }

    render() {
        const {user, accountFollowings} = this.props;

        return (
            <div className="account">
                <div className="account__user-name">
                    { user.name }
                </div>
                <div className="account__user-email">
                    { user.email }
                </div>
                <div className="account__followers">
                    <b>Following:</b>
                    <div className="account__followers-count">{ accountFollowings.length }</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: getAccountUser(state),
    accountFollowings: getAccountFollowings(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getFollowing
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);
