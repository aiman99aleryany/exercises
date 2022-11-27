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
        console.log(index);
        this.setState((state) => {
            const newState = state;
            newState.items.splice(index, 1); // only slice the index 1 stands for 1 element including the index
            console.log(newState.items);
            return newState;
        });
    };

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => this.deleteItem(index)}>x</button>
                        </li>
                    ))}
                </ul>
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
