import { useState } from 'react';

const useGithubUser = (username = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://api.github.com/users/${username}`);
            const json = await response.json();
            
            setData(json);
        } catch (error) {
            setData(null);
            setError(new Error(error));
        } finally {
            setLoading(false);
        }
         
        
    };

    return [data, loading, error, fetchData];
};

export default useGithubUser;
