import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from './accountActions';
import { isAccountRequestLoading } from './accountSelectors';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        if (this.props.isAccountRequestLoading) {
            return false;
        }

        this.props.signUp(this.state);
    }

    render() {
        return (
            <div className="sign-up">
                <div className="sign-up__body">
                    <form className="sign-up__form" action="/" onSubmit={ this.onSubmit }>
                        <div className="sign-up__form-fullname">
                            <label
                                className="sign-up__form-label sign-up__form-fullname-label"
                                htmlFor="fullname"
                            >
                                Name
                            </label>
                            <input
                                id="fullname"
                                value={ this.state.name }
                                onChange={ this.onNameChange }
                                type="text"
                                className="sign-up__form-fullname-field"
                                required
                            />
                        </div>
                        <div className="sign-up__form-email">
                            <label
                                className="sign-up__form-label sign-up__form-email-label"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                value={ this.state.email }
                                onChange={ this.onEmailChange }
                                type="email"
                                className="sign-up__form-email-field"
                                required
                            />
                        </div>
                        <div className="sign-up__form-password">
                            <label
                                className="sign-up__form-label sign-up__form-password-label"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                value={ this.state.password }
                                onChange={ this.onPasswordChange }
                                type="password"
                                className="sign-up__form-password-field"
                                required
                                />
                        </div>
                        <div className="sign-up__form-submit">
                            <button
                                disabled={ this.props.isAccountRequestLoading }
                                type="submit"
                                className="sign-up__form-submit-button"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <div className="sign-up__footer">
                    <div className="sign-up__link">
                        Already have an account? <Link to="/">Login here.</Link>
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
    signUp
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
