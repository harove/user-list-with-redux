import {USER__ADD_USER} from './user.const'

export const addUserActionCreator = (user) => {
    return {
        type: USER__ADD_USER,
        payload: user,
    }
}
