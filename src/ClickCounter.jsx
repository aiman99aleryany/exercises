import React from 'react';

class ClickCounter extends React.Component {
    state = {
        count: 0,
    };

    handleBtnClick = () => {
        this.setState((state) => ({ ...state, count: state.count + 1 }));
    };

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleBtnClick}>+1</button>
            </div>
        );
    }
}

export default ClickCounter;
