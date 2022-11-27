import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <div className='welcome'>
                <h1>Welcome, {this.props.message}</h1>
            </div>
        );
    }
}

Welcome.defaultProps = {
    message: 'World',
};

export default Welcome;
