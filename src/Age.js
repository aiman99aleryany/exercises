import React from 'react';

class Age extends React.Component {
    render() {
        return (
            <div>
                <p>Your age is {this.props.age}</p>
            </div>
        );
    }
}

Age.defaultProps = {
    age: 0,
};

export default Age;
