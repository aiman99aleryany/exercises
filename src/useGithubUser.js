import useSWR from 'swr';

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

const useGithubUser = (username = '') => {
    const { data, mutate } = useSWR(`https://api.github.com/users/${username}`, fetchData);

    const fetchUserData = () => {
        mutate();
    };

    return [data, fetchUserData];
};

export default useGithubUser;
