import React, { useEffect, useState } from 'react';


const INIT_DATA_VALUE = null;

const GithubUser = ({ username }) => {
    const [data, setData] = useState(INIT_DATA_VALUE);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error))
    }, [username]);

    
    const renderData = () => {
        return Object.entries(data).map((dataPair, i) => {
            return <li key={i}>{dataPair[0]} :::: {dataPair[1]}</li>
        });
    }


    return (
        <div>
            {data && renderData()}
        </div>
    );
};

export default GithubUser;
