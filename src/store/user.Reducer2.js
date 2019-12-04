import {USER__ADD_USER, USER__DELETE_USER, USER__EDIT_USER} from './user.const'

const initialState = {
    id: 1, 
    list: [{
        id: 1,
        nombre: 'Goku' 
    }],
    idRemove: null,
};

const userReducer = (prevState = initialState, action) => {
    switch (action.type) {
        case USER__ADD_USER: 
        return {
            ...prevState,
            id: prevState.id + 1,
            list: [...prevState.list,{id: prevState.id + 1, nombre: action.payload.name }],
        }
            
        //payload.list, payload.idRemove
        case USER__DELETE_USER:
        return {
            ...prevState,
            ...action.payload,
        }
        //payload.list
        case USER__EDIT_USER:
        return {
            ...prevState,
            ...action.payload,
        }
        default:
            return prevState;
    }

}
export default userReducer;