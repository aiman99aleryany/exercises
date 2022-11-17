import React from 'react';

const promptName = (name) => <h1>{name}</h1>;

class App extends React.Component {
    render() {
        return <div>{promptName('Aiman')}</div>;
    }
}

export default App;
