import React from 'react';
import { useState } from 'react';

const INIT_STATE = {
    count: 0,
};

const ClickCounter = () => {
    const [state, setState] = useState(INIT_STATE);

    const handleBtnClick = () => {
        setState((state) => ({ ...state, count: state.count + 1 }));
    };

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={handleBtnClick}>+1</button>
        </div>
    );
};

export default ClickCounter;
