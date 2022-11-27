import React from 'react';
import Welcome from './Welcome';

class InteractiveWelcome extends React.Component {
    state = {
        message: '',
    };

    handleOnChange = (event) => {
        this.setState({
            message: event.target.value,
        });
    };

    render() {
        return (
            <div>
                <Welcome message={this.state.message}></Welcome>
                <input type="text" value={this.state.message} onChange={this.handleOnChange} />
            </div>
        );
    }
}

export default InteractiveWelcome;
