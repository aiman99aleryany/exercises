import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/route1">Go to route 1</Link>
                </li>
                <li>
                    <Link to="/route2">Go to route 2</Link>
                </li>
                <li>
                    <Link to="/route3">Go to route 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default App;
