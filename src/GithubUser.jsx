import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
    const [userData, fetchData] = useGithubUser(username);

    return (
        <div>
            <button onClick={fetchData}>fetch User Data</button>
            {userData &&
                Object.entries(userData).map((dataPair, i) => (
                    <div key={i}>
                        {dataPair[0]}: {dataPair[1]}
                    </div>
                ))}
        </div>
    );
};

export default GithubUser;
