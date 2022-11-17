import React from 'react';

const isAdult = (age) => age > 18;

class Age extends React.Component {
    render() {
        const oldText = <p> Your age is {this.props.age}</p>;
        const youngText = <p>You are very young</p>;
        return <div>{isAdult(this.props.age) ? oldText : youngText}</div>;
    }
}

Age.defaultProps = {
    age: 0,
};

export default Age;
