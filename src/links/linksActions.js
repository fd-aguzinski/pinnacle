import { API } from '../config';
import { getAccountId } from '../account/accountSelectors';

export const GET_FOLLOWING_REQUEST = 'GET_FOLLOWING_REQUEST';
export const GET_FOLLOWING_SUCCESS = 'GET_FOLLOWING_SUCCESS';
export const GET_FOLLOWING_FAIL = 'GET_FOLLOWING_FAIL';

export const CREATE_LINK_REQUEST = 'CREATE_LINK_REQUEST';
export const CREATE_LINK_SUCCESS = 'CREATE_LINK_SUCCESS';
export const CREATE_LINK_FAIL = 'CREATE_LINK_FAIL';

export const getFollowing = () => (dispatch, getState) => {
    const accountId = getAccountId(getState());

    dispatch({
        type: GET_FOLLOWING_REQUEST,
        payload: accountId
    });

    fetch(`${API.LINKS}/following/${accountId}`, {
            method: 'GET',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_FOLLOWING_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch({
                type: GET_FOLLOWING_FAIL,
                payload: error
            });
        });
};

export const createLink = (followedUserId) => (dispatch, getState) => {
    const followingUserId = getAccountId(getState());

    dispatch({
        type: CREATE_LINK_REQUEST,
        payload: {followingUserId, followedUserId}
    });

    fetch(API.LINKS, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({followingUserId, followedUserId})
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: CREATE_LINK_SUCCESS,
                payload: response
            });
        })
        .catch(error => {
            dispatch({
                type: CREATE_LINK_FAIL,
                payload: error
            });
        });
};
