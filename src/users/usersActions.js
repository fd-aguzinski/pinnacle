import { API } from '../config';
export const USERS_REQUEST = 'USERS_REQUEST';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';

export const requestUsers = () => (dispatch) => {
    dispatch({
        type: USERS_REQUEST
    });

    fetch(API.USERS, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: USERS_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch({
                type: USERS_FAIL,
                payload: error
            });
        });
};
