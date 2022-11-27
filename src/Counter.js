import React from 'react';
import CounterDisplay from './CounterDisplay';

// The constructor is not needed anymore in this case, because we have the componentDidMount method
// and this method is executed after the Component has already rendered. and that's what we want.
// to start rendering after the {state} has already rendered the first time with 0
class Counter extends React.Component {
    state = {
        count: this.props.initValue,
    };

    componentDidMount() {
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
