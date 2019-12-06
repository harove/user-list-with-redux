import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './modules/user';
import classRoomReducer from './modules/class-room'
import {logger} from 'redux-logger'

const rootReducer = combineReducers({
    userModule: userReducer,
    classRoomModule: classRoomReducer,
});



export const store = createStore(rootReducer, applyMiddleware(logger));

