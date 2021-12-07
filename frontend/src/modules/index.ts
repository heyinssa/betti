import { combineReducers } from 'redux';
import Provider from './Provider';
import Login from './Login';

const rootReducer = combineReducers({
    Provider,
    Login
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;