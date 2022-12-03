import { useState } from 'react';

const useForm = (user = '', pass = '') => {
    const [username, setUsername] = useState(user);
    const [password, setPassword] = useState(pass);

    const handleUsernameInput = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPassword(event.target.value);
    };

    return [username, password, handleUsernameInput, handlePasswordInput];
};


export default useForm;
