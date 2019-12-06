import {USER__ADD_USER,USER__DELETE_USER,USER__EDIT_USER} from './user.const'

export const addUserActionCreator = (user) => {
    return {
        type: USER__ADD_USER,
        payload: user,
    }
}

export const removeUserActionCreator = (newList,user) => {
    return {
        type: USER__DELETE_USER,
        payload: {
            idRemove: user.id,
            list: newList,
        }
    }
}


/**
 * 
 * @param {Array<any>} list 
 * @param {any} user 
 */

export const editUserActionCreator = (list,user) => {
    const idEdit = list.findIndex(e => e.id == user.id )
    list[idEdit] = {
        name: user.name,
        id: user.id,
    }
    return {
        type: USER__EDIT_USER,
        payload: {
            list: list,
        }
    }
}