import React from 'react';
import CounterDisplay from './CounterDisplay';

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
                <CounterDisplay count={this.state.count} />
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
