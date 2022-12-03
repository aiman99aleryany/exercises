import { useState } from "react";


const useCounter = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue);

    const incrementCounter = () => {
        setCounter((counter) => counter + 1);
    }

    const decrementCounter = () => {
        setCounter((counter) => counter - 1);
    }

    const resetCounter = () => {
        setCounter(initValue);
    }

    return [
        counter,
        incrementCounter,
        decrementCounter,
        resetCounter
    ];
}


export default useCounter;
