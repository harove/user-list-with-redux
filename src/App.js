import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './app.css'
import { addUserActionCreator } from './store/user.actions';


const App = () => {
    const [name, setName] = useState('hola')
    const store = useSelector(store => store );
    const dispatch = useDispatch();

    const addVegeta = () => {
       dispatch(addUserActionCreator({
           id:null,
           name: 'Vegeta',
       })); 
    }

    const addUser = ()=>{
        dispatch(addUserActionCreator({
            id:null,
            name
        }))
    }


    const handleOnChange = ({target}) => {
        const {value} = target 
        setName(value)
     }
 
    return(
        <div className="app">
            <input type = "text" value = {name} onChange = {handleOnChange}/>
            <button onClick = {addUser}>
                Add Vegeta
            </button>
            <pre>
                {JSON.stringify(store)}
            </pre>
        </div>  
    )
}

export default App;
