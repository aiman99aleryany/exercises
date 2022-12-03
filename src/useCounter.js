import { useCallback, useState } from 'react';

const useCounter = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue);

    const incrementCounter = useCallback(() => setCounter((counter) => counter + 1), []);

    const decrementCounter = useCallback(() => setCounter((counter) => counter - 1), []);

    const resetCounter = useCallback(() => setCounter(initValue), [initValue]);

    return [counter, incrementCounter, decrementCounter, resetCounter];
};

export default useCounter;
