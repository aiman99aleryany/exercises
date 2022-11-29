import React, { useEffect } from 'react';
import { useState } from 'react';

const INIT_STATE = {
    count: 0,
};

const ClickCounter = ({ onCounterChange }) => {
    const [state, setState] = useState(INIT_STATE);

    useEffect(() => {
        onCounterChange(state.count);
    }, [state.count]);

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
