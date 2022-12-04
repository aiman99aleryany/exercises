import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GithubUserList = () => {
    const [input, setInput] = useState('');
    const [users, setUsers] = useState([]);
    const [detials, setDetials] = useState(null);

    const handleInput = (event) => {
        setInput(event.target.value);
    };

    const addUser = () => {
        if (input === '') return;
        setUsers((users) => [...users, input]);
        setInput('');
    };

    const deleteUser = (index) => {
        setUsers(() => users.filter((user, i) => i !== index));
    };

    const renderUsers = () => {
        return users.map((user, i) => {
            return (
                <li key={i}>
                    {user}
                    <button onClick={() => deleteUser(i)}>x</button>
                </li>
            );
        });
    };

    const fetchDetails = () => {
        setDetials(() => {
            return users.map((user, i) => {
                return (
                    <div key={i}>
                        <h1>{user} Data:</h1>
                        <ul>
                            <Link to={`/users/${user}`}>Link to {user} data</Link>
                        </ul>
                    </div>
                );
            });
        });
    };

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={addUser}>Add User</button>
            <ul>{renderUsers()}</ul>
            <button onClick={fetchDetails}>Query Details</button>
            {detials}
        </div>
    );
};

export default GithubUserList;
