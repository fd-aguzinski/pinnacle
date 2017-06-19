import { combineReducers } from 'redux';
import { CREATE_LINK_SUCCESS, GET_FOLLOWING_SUCCESS } from './linksActions';

export function cache(state = [], { type, payload }) {
    switch (type) {
        case CREATE_LINK_SUCCESS:
            return [...state, payload.id];
        case GET_FOLLOWING_SUCCESS:
            return payload;
        default:
            return state;
    }
};

export default combineReducers({
    cache
});
