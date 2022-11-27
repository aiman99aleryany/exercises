import React from 'react';

class Clicktracker extends React.Component {
    state = {
        pointer: '',
    };

    handleBtnClick = (event) => {
        this.setState({
            pointer: event.target.name,
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.pointer}</h1>
                <button name="button 1" onClick={this.handleBtnClick}>
                    button 1
                </button>
                <button name="button 2" onClick={this.handleBtnClick}>
                    button 2
                </button>
                <button name="button 3" onClick={this.handleBtnClick}>
                    button 3
                </button>
            </div>
        );
    }
}

export default Clicktracker;
