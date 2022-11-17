import React from 'react';

// if you pass props as a JSX expressions, it doesn't matter.. because you can still put JSX expression
// inside the curly braces {}
class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: 'New User',
    age: 0,
};

export default Welcome;
