import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    };

    handleInput = (event) => {
        this.setState({
            [event.target.name]:
                event.target.name === 'remember' ? event.target.checked : event.target.value,
        });
    };

    render() {
        return (
            <div>
                <label htmlFor="username">Username: </label>
                <input
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInput}
                />
                <label htmlFor="password">Password: </label>
                <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleInput}
                />
                <label htmlFor="remember">Remember Me</label>
                <input
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleInput}
                />
            </div>
        );
    }
}

export default Login;
