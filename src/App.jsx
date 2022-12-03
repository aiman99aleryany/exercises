import React from 'react';
import FilteredList from './FilteredList';

const listOfUsers = [
    {id: 1, name: 'jason', age: 60},
    {id: 2, name: 'var', age: 45},
    {id: 3, name: 'johnny', age: 30},
]


const App = () => {
    return <div>
        <FilteredList users={listOfUsers}></FilteredList>
        </div>;
}


export default App;
