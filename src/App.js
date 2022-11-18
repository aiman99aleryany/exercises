import React from 'react';



// Nothing happens because undefined does not get rendered.
const promptName = (name) => <h1>{name}</h1>;
class App extends React.Component {
    render() {
        return <div>{promptName()}</div>;
    }
}

export default App;
