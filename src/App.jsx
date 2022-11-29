import React, { useState } from 'react';
import DisplayLanguage from './DisplayLanguage';
import LanguageContext from './LanguageContext';

const INIT_STATE = {
    language: 'EN',
};

function App() {
    const [state, setState] = useState(INIT_STATE);

    function handleLanguageSelection(event) {
        setState({
            ...state,
            language: event.target.value,
        });
    }

    return (
        <div>
            <select value={state.language} onChange={handleLanguageSelection}>
                <option value="EN">EN</option>
                <option value="IT">IT</option>
            </select>
            <LanguageContext.Provider value={state.language}>
                <DisplayLanguage></DisplayLanguage>
            </LanguageContext.Provider>
        </div>
    );
}

export default App;
