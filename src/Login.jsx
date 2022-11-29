import React, { useState } from 'react';

const INIT_STATE = {
    username: '',
    password: '',
    remember: false,
};

const Login = ({ onLoginFn }) => {
    const [state, setState] = useState(INIT_STATE);
    const {username, password} = state;
    

    const handleInput = (event) => {
        setState((state) => ({
            ...state,
            [event.target.name]:
                event.target.name === 'remember' ? event.target.checked : event.target.value,
        }));
    };

    return (
        <div>
            <label htmlFor="username">Username: </label>
            <input name="username" type="text" value={state.username} onChange={handleInput} />
            <label htmlFor="password">Password: </label>
            <input name="password" type="password" value={state.password} onChange={handleInput} />
            <label htmlFor="remember">Remember Me</label>
            <input
                name="remember"
                type="checkbox"
                checked={state.remember}
                onChange={handleInput}
            />
            <button
                onClick={() => {
                    onLoginFn(state);
                }}
                disabled={!(username && password)}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
