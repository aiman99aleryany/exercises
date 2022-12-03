import React from 'react';
import Weclome from './Welcome';

const App = ({name}) => {
        return (
            <div>
                <Weclome name={name}></Weclome>
            </div>
        );
    }

export default App;
