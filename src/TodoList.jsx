import React from 'react';

class TodoList extends React.Component {
    state = {
        newItem: '',
        items: [],
    };

    handleInputChange = (event) => {
        this.setState({
            ...this.state,
            newItem: event.target.value,
        });
    };

    addnewItem = () => {
        if (this.state.newItem === '') return;
        this.setState({
            ...this.state,
            items: [...this.state.items, this.state.newItem],
            newItem: '',
        });
    };

    resetAll = () => {
        this.setState({
            ...this.state,
            items: [],
        });
    };

    deleteItem = (index) => {
        this.setState((state) => {
            const newState = state;
            newState.items.splice(index, 1); // only slice the index 1 stands for 1 element including the index
            return newState;
        });
    };

    render() {
        return (
            <div>
                {this.props.render(this.state.items, this.deleteItem)}
                <input
                    name="newItemField"
                    type="text"
                    value={this.state.newItem}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addnewItem}>Add Item</button>
                <button onClick={this.resetAll}>Reset</button>
            </div>
        );
    }
}

export default TodoList;
