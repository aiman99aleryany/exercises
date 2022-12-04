import useSWR from 'swr';

const fetchData = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

const useGithubUser = (username = null) => {
    const { data, mutate } = useSWR(`https://api.github.com/users/${username}`, fetchData);

    // it's already implemented here, it was even here since the CustomHook exercise.
    // I just converted it to a `mutate` function here.
    const fetchUserData = () => {
        mutate();
    };

    return [data, fetchUserData];
};

export default useGithubUser;
