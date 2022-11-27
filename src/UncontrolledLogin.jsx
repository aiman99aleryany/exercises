import React from 'react';

// I can't disable the button in an Uncontrolled Component, I think the exercise should be changed.
// Also it's a bit confusing to use the 'state' with Uncontrolled components, because sometimes
// the 'state' doesn't get updated in time when using the setState method. for an example here in 
// line 25 if that's prop function was passing the 'state' it will print an old version of 
// the state, not the one was recently enterd by the user. So I avoided using 'state', I think 
// states should only be used in Controlled Components other than that it just creates 
// an unnecessary complexity.

// another way around this, I disabled the call to the 'this.props.onLoginFn' method if the fields
// are empty.
class UncontrolledLogin extends React.Component {
    constructor(props) {
        super(props);
        this.data = {
            username: '',
            password: '',
            remember: false,
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.data = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
            remember: event.target.elements.remember.checked,
        };

        this.data.username && this.data.password ? this.props.onLoginFn(this.data) : null;
    };

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username: </label>
                    <input name="username" type="text" />
                    <label htmlFor="password">Password: </label>
                    <input name="password" type="password" />
                    <label htmlFor="remember">Remember Me</label>
                    <input name="remember" type="checkbox" />
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledLogin;
