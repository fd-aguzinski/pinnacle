import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import accountReducers from './account/accountReducers';
import usersReducers from './users/usersReducers';
import linksReducers from './links/linksReducers';

export default combineReducers({
    routing: routerReducer,
    account: accountReducers,
    users: usersReducers,
    links: linksReducers,
});
