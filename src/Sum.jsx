import React from 'react';

const Sum = ({ numbers = [] }) => {
    const total = numbers.reduce((acc, n) => acc + n, 0);

    return (
        <div>
            <h1>{total}</h1>
        </div>
    );
};

export default Sum;
