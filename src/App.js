import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './app.css'
import { addUserActionCreator, removeUserActionCreator, editUserActionCreator } from './store/modules/user/user.actions';


const App = () => {
    const [name, setName] = useState('')
  
    const store = useSelector(store => store.userModule );
    debugger;
    const dispatch = useDispatch();

    const addUser = ()=>{
        dispatch(addUserActionCreator({
            id:null,
            name
        }))
        setName('');
    }

    const handleOnChange = ({target}) => {
        const {value} = target 
        setName(value)
     }
 
    const handleDelete = (user) => {
        const newList = store.user.list.filter(e => e.id !== user.id )
        return (e) => {
            dispatch(removeUserActionCreator(newList,user));
        }
    };

    const handleOnEdit = (user) => {
        return (e)=> {
            const newUserName = prompt(`nuevo nombre para ${user.name}`)
            user.name = newUserName;
            dispatch(editUserActionCreator(store.user.list,user));
        }
        
       
    };


    return(
        <div className="app">
            <input type = "text" value = {name} onChange = {handleOnChange}/>
            <button disabled = {name == ''} onClick = {addUser}>
                Add user
            </button>
            <table>
                <tbody>
                        {
                            store.user.list.map(user=>(
                                <tr key = {user.id}>
                                    <td>
                                        {user.name}
                                    </td>
                                    <td>
                                        <button onClick = {handleDelete(user)}>
                                            delete
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick = {handleOnEdit(user)}>
                                            edit
                                        </button>
                                    </td>
                                </tr>
                                )
                            )
                        }
                </tbody>
            </table>


        </div>  
    )
}

export default App;
