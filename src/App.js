import React from 'react';
import Welcome from './Welcome';
class App extends React.Component {
    render() {
        return (
            <div>
                <Welcome name={<strong>Conor</strong>} age={30}></Welcome>
            </div>
        );
    }
}

export default App;
