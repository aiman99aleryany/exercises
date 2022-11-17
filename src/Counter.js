import React from 'react';

class Counter extends React.Component {
    state = {
        count: this.props.initValue,
    };

    constructor(props) {
        super(props);
        setInterval(() => {
            this.setState((state) => ({
                count: state.count + this.props.incrementBy,
            }));
        }, this.props.timeout);
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

Counter.defaultProps = {
    initValue: 0,
    incrementBy: 1,
    timeout: 1000,
};

export default Counter;
