import React from 'react';

const sum = (n1, n2) => <h2>{n1 + n2}</h2>;

class App extends React.Component {
    render() {
        return <div>{sum(1, 2)}</div>;
    }
}

export default App;
