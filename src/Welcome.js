import React from 'react';
import Age from './Age';

const isAdult = (age = 0) => age > 18;

const showAge = (age) => isAdult(age) && <Age age={age} />;

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                {this.props.age && showAge(this.props.age)}
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: 'New User',
};

export default Welcome;
