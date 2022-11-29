import React from 'react';

// we can set a default value by doing it inside the destructuring expression of the function.
const Sum = ({ numbers = [] }) => {
    const total = numbers.reduce((acc, n) => acc + n, 0);

    return (
        <div>
            <h1>{total}</h1>
        </div>
    );
};

export default Sum;
