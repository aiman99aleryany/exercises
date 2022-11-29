import React from 'react';
import Sum from './Sum';
class App extends React.Component {
    render() {
        return (
            <div>
                <Sum numbers={[1, 2, 3, 4, 5, -1]}></Sum>
            </div>
        );
    }
}

export default App;
