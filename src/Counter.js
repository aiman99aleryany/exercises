import React, { useEffect, useState } from 'react';

const STATE_INIT_VALUE = 0;

const Counter = () => {
    const [state, setState] = useState(STATE_INIT_VALUE);

    useEffect(() => {
        const counterInterval = setInterval(() => setState((state) => state + 1), 1000);

        return () => {
            clearInterval(counterInterval);
        };
    }, []);

    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
};

export default Counter;
