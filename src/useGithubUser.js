import { useState } from 'react';

const useGithubUser = (username = '') => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();

            setData(json);
        } catch (error) {
            console.log(error);
            setData(null);
        }
    };

    return [data, fetchData];
};

export default useGithubUser;
