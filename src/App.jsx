import React from 'react';
import Login from './Login';





class App extends React.Component {


    onLogin = (state) => {
       console.log(state);
    }

    render() {
        return (
            <div>
                <Login onLoginFn={this.onLogin}></Login>
            </div>
        );
    }
}

export default App;
