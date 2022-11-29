import React from 'react';
import ClickCounter from './ClickCounter';

class App extends React.Component {
    render() {
        return (
            <div>
                <ClickCounter onCounterChange={(count) => {
                        console.log(count);
                }}></ClickCounter>
            </div>
        );
    }
}

export default App;
