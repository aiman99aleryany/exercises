import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import GithubUserList from './GithubUserList';
import ShowGithubUser from './ShowGithubUser';

const indexRoute = {
    path: '/',
    element: <App />,
};

const usersRoute = {
    path: 'users',
    element: <GithubUserList />,
}

const userRoute = {
    path: 'users/:username',
    element: <ShowGithubUser />,
}

const router = createBrowserRouter([indexRoute, usersRoute, userRoute]);

const RouteRoot = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
};

export default RouteRoot;
