import React from 'react';
import Age from './Age';

const isAdult = (age = 0) => age > 18;

const isYoung = (age = 0) => age < 65;

const isAgePresent = (age) => age ?? false;

const isJohn = (name) => name === 'John';

const showAge = (name, age) =>
    isJohn(name) &&
    isAgePresent(age) &&
    isAdult(age) &&
    isYoung(age) && <Age age={age} />;

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <p>Welcome, {this.props.name}</p>
                {showAge(this.props.name, this.props.age)}
            </div>
        );
    }
}

Welcome.defaultProps = {
    name: 'New User',
};

export default Welcome;
