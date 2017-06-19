import { combineReducers } from 'redux';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './accountActions';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from './accountActions';

export function id(state = null, { type, payload }) {
    switch (type) {
        case LOGIN_SUCCESS:
            return payload.userId;
        case SIGN_UP_SUCCESS:
            return payload.id;
        default:
            return state;
    }
}

export function loading(state = false, { type, payload }) {
    switch (type) {
        case LOGIN_REQUEST:
        case SIGN_UP_REQUEST:
            return true;
        case SIGN_UP_SUCCESS:
        case LOGIN_SUCCESS:
        case SIGN_UP_FAIL:
        case LOGIN_FAIL:
            return false;
        default:
            return state;
    }
}

export function user(state = {}, { type, payload }) {
    switch(type) {
        case SIGN_UP_SUCCESS:
            return payload;
        default:
            return state;
    }
}

export default combineReducers({
    id,
    loading,
    user
});
