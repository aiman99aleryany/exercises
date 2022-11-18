import React from 'react';

// It will print the JSX expression normally
const promptName = (name) => <h1>{name}</h1>;
class App extends React.Component {
    render() {
        return <div>{promptName(<strong>Hello</strong>)}</div>;
    }
}

export default App;
