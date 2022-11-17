import React from 'react';

// it doesn't show anything if I don't pass the name prop and that's because
// React doesn't render 'undefined' or 'null' or 'false'
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
