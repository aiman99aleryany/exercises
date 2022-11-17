import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter initValue={0} timeout={1000} incrementBy={1} />
            </div>
        );
    }
}

export default App;
