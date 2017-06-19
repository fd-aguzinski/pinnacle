import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from './accountActions';
import { isAccountRequestLoading } from './accountSelectors';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.props.isAccountRequestLoading) {
            return false;
        }

        this.props.login(this.state);
    }

    render() {
        return (
            <div className="login">
                <div className="login__body">
                    <form className="login__form" action="/" onSubmit={ this.onSubmit }>
                        <div className="login__form-email">
                            <label
                                className="login__form-label login__form-email-label"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                value={ this.state.email }
                                onChange={ this.onEmailChange }
                                type="text"
                                className="login__form-email-field"
                                placeholder="Email address"
                            />
                        </div>
                        <div className="login__form-password">
                            <label
                                className="login__form-label login__form-password-label"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                value={ this.state.password }
                                type="password"
                                onChange={this.onPasswordChange}
                                className="login__form-password-field"
                                placeholder="Password"
                             />
                        </div>
                        <div className="login__form-submit">
                            <button
                                disabled={ this.props.isAccountRequestLoading }
                                type="submit"
                                className="login__form-submit-button"
                            >
                                LOGIN
                            </button>
                        </div>
                    </form>
                </div>
                <div className="login__footer">
                    <div className="login__no-account">
                        Don't have an account? <Link to="/sign-up">Create one here.</Link>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    isAccountRequestLoading: isAccountRequestLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
