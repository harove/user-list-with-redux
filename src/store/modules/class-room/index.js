import {combineReducers} from 'redux';

import classRoomReducer from './classRoom.reducer';

const rootReducer = combineReducers({
    user: classRoomReducer,
});

export default rootReducer;