import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addUserActionCreator} from './store/user.actions';

function App() {
  const [name, setName] = useState('');
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const addUser = () => {
    const user = {
      id: null,
      name,
    }
    dispatch(addUserActionCreator(user));
  }

  const handlerOnChange = ({target}) => {
    const {value} = target
    setName(value);
  }

  return (
    <div className="app">

      <input type="text" name = "name" value = {name} onChange = {handlerOnChange}/>
      <button onClick = {addUser}>agregar a vegetta</button>

      <pre>
        {JSON.stringify(store,undefined,2)}
      </pre>
    </div>
  );
}

export default App;