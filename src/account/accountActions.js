import { push } from 'react-router-redux';
import { API } from '../config';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';

export const login = ({email, password}) => (dispatch) => {
    dispatch({
        type: LOGIN_REQUEST,
        payload: email
    });

    if (password !== 'password') {
        return dispatch({
            type: LOGIN_FAIL,
            payload: 'Password incorrect'
        });
    }

    fetch(`${API.USER_AUTH}/${email}`, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({identifier: email, password})
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            });

            dispatch(push('/swag-base'));
        })
        .catch(error => {
            dispatch({
                type: LOGIN_FAIL,
                payload: error
            });
        });
};

export const signUp = ({email, password, name}) => (dispatch) => {
    dispatch({
        type: SIGN_UP_REQUEST,
        payload: email
    });

    if (!password || !email || !name) {
        return dispatch({
            type: SIGN_UP_FAIL,
            payload: 'Please fill out all fields to sign up.'
        });
    }

    fetch(API.USERS, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({email, password, name})
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: response
            });

            dispatch(push('/swag-base'));
        })
        .catch(error => {
            dispatch({
                type: SIGN_UP_FAIL,
                payload: error
            });
        });
};
