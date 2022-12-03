import React from 'react';
import useForm from './useForm';
const App = () => {
    const [username, password, handleUsernameInput, handlePasswordInput] = useForm();
    return <div>
           <input type="text" value={username} onChange={handleUsernameInput}/>
           <input type="password" value={password} onChange={handlePasswordInput}/>
        </div>;
}


export default App;
