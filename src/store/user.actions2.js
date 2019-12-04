import {USER__ADD_USER,USER__DELETE_USER,USER__EDIT_USER} from './user.const';

export const addUserActionCreator = (user)=>{
    return({
        type: USER__ADD_USER,
        payload: user,
    })   
}
