import React from 'react';
import Age from './Age';
// if you pass props as a JSX expressions, it doesn't matter.. because you can still put JSX expression
// inside the curly braces {}
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <Age age={this.props.age} />
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: 'New User',
};

export default Welcome;
