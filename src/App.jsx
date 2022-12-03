import React from 'react';
import GithubUser from './GithubUser';

const MY_GITHUB_ACCOUNT = 'aiman99aleryany';


class App extends React.Component {
    render() {
        return (
            <div>
                <GithubUser username={MY_GITHUB_ACCOUNT}></GithubUser>
            </div>
        );
    }
}

export default App;
