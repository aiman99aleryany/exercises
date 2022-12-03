import React from 'react';
import useCounter from './useCounter';
const App = () => {
    const [counter, incrementCounter, decrementCounter, resetCounter] = useCounter(0);

    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};

export default App;
