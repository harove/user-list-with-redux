import {createStore} from 'redux';
import {userReducer} from './user.reducer';
export const store = createStore(userReducer);
