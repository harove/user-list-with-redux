import {createStore, combineReducers} from 'redux';
import userReducer from './user.Reducer';
import classRoomReducer from './classRoom.reducer'

const rootReducer = combineReducers({
    user: userReducer,
    classRoom: classRoomReducer,
})

const store = createStore(rootReducer);
export default store;


