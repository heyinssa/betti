import { combineReducers } from 'redux';
import Provider from './Provider';

const rootReducer = combineReducers({
    Provider
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;