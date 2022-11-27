import React from 'react';



// already done
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
        if(this.state.newItem === '')  return;
        this.setState({
            ...this.state,
            items: [...this.state.items, this.state.newItem],
            newItem: '',
        });
    };


    resetAll = () => {
        this.setState({
            ...this.setState,
            items: [],
        }) 
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => (
                        <li key={index}>{item}</li>
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
