import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome, {this.props.message}</h1>
            </div>
        );
    }
}

Welcome.defautProps = {
    message: 'New User',
};

export default Welcome;
