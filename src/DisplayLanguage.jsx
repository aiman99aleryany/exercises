import React from 'react';
import LanguageContext from './LanguageContext';

function DisplayLanguage() {
    return (
        <div>
            <LanguageContext.Consumer>
                {(language) => {
                    return (
                        <div>
                            <h1>The language you have selected is: {language}</h1>
                        </div>
                    );
                }}
            </LanguageContext.Consumer>
        </div>
    );
}

export default DisplayLanguage;
