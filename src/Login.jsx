import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this._btnIsDisabled = true;
        this._passwordIsShort = false;
    }

    state = {
        username: '',
        password: '',
        remember: false,
    };

    handleInput = (event) => {
        this.setState(() => ({
            [event.target.name]:
                event.target.name === 'remember' ? event.target.checked : event.target.value,
        }));
    };

    shouldButtonDisable = () => {
        this._btnIsDisabled = !(this.state.username && this.state.password);
        return this._btnIsDisabled;
    };

    isPasswordShort = () => {
        this._passwordIsShort = this.state.password.length < 8;
        return this._passwordIsShort ? 'button--red' : 'button--green';
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
                <button
                    onClick={() => {
                        this.props.onLoginFn(this.state);
                    }}
                    disabled={this.shouldButtonDisable()}
                    className={this.isPasswordShort()}
                >
                    Login
                </button>
            </div>
        );
    }
}

export default Login;
