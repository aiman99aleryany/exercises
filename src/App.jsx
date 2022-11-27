import React from 'react';
import UncontrolledLogin from './UncontrolledLogin';

class App extends React.Component {
    onLogin = (state) => {
        console.log(state);
    };

    render() {
        return (
            <div>
                <UncontrolledLogin onLoginFn={this.onLogin}></UncontrolledLogin>
            </div>
        );
    }
}

export default App;
