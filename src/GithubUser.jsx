import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
    const [userData, loadingStatus, errorStatus, fetchData] = useGithubUser(username);

    const renderLoading = (status) => {
        const loadingJSX = <h1> Loading ... </h1>;
        return status ? loadingJSX : null;
    }

    const renderError = (error) => {
        const errorJSX = <label htmlFor="fetchButton">{error}</label>;
        return error === null ? null : errorJSX;
    }

    const renderData = (data) => {
        const dataToArray = Object.entries(data);
        return dataToArray.map((dataPair, i) => {
            return <div key={i}>
                {dataPair[0]} : {dataPair[1]}
                </div>
        })
    }

    return (
        <div>
            <button name='fetchButton' onClick={fetchData}>fetch User Data</button>
            {renderLoading(loadingStatus)}
            {renderError(errorStatus)}
            {userData && renderData(userData)}
        </div>
    );
};

export default GithubUser;
