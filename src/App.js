import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './app.css'
import { addUserActionCreator } from './store/user.actions';


const App = () => {
    const [name, setName] = useState('')
    const store = useSelector(store => store );
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
                                </tr>
                                )
                            )
                        }
                </tbody>
            </table>

            <pre>
                {JSON.stringify(store,undefined,2)}
            </pre>
        </div>  
    )
}

export default App;
