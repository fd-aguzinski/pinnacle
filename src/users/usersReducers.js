import { combineReducers } from 'redux';
import { USERS_REQUEST, USERS_SUCCESS, USERS_FAIL } from './usersActions';

export function cache(state = [], { type, payload }) {
    switch (type) {
        case USERS_SUCCESS:
            return payload;
        default:
            return state;
    }
}

export function loading(state = false, { type, payload }) {
    switch (type) {
        case USERS_REQUEST:
            return true;
        case USERS_SUCCESS:
        case USERS_FAIL:
            return false;
        default:
            return state;
    }
}

export default combineReducers({
    cache,
    loading
});
