import React from 'react';
import {useSelector} from 'react-redux';



const App = () => {
    const store = useSelector(store => store );
    return(
        <pre>
            {JSON.stringify(store)}
        </pre>        
    )
}

export default App;