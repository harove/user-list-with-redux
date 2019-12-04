const initialState = {
    list: [],
    roomNumber: 0,
}

/**
 * @param {any} action -acción
 * @param {string} action.type
 * @param {any} payload
 */

const classRoomReducer = (prevState = initialState,action) =>{
    switch (action.type) {
        case 'CLASSROOM/ADD_STUDENT':
        return {
            ...prevState,
            list: action.payload,
        }    
        case 'CLASSROOM/REMOVE_STUDENT':
        return {
            ...prevState,
            list: action.payload,
        }    
        case 'CLASSROOM/SET_ROOM_NUMBER':   
        return {
            ...prevState,
            roomNumber: action.payload,
        }    
        default:
          return prevState;
    }

}
    
export default classRoomReducer;