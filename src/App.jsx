import React from 'react';
import TodoList from './TodoList';
class App extends React.Component {
    render() {
        return <div>
            <TodoList render={(items, deleteMethod) => 
                    (
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    {item}
                                    <button onClick={() => deleteMethod(index)}>x</button>
                                </li>
                            ))}
                        </ul>
                    )
            }></TodoList>
            </div>;
    }
}

export default App;
