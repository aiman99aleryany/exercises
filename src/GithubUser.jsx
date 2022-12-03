import React, { useEffect, useState } from 'react';

const INIT_DATA_VALUE = null;

const GithubUser = ({ username }) => {
    const [data, setData] = useState(INIT_DATA_VALUE);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
            .finally();
    }, [username]);

    return (
        <div>
            {data &&
                Object.entries(data).map((dataPair, i) => (
                    <div key={i}>
                        {dataPair[0]}: {dataPair[1]}
                    </div>
                ))}
        </div>
    );
};

export default GithubUser;
