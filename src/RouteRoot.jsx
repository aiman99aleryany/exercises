import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import ShowGithubUser from './ShowGithubUser';

const indexRoute = {
    path: '/',
    element: <App />,
};

const usersRoute = {
    path: 'users/:username',
    element: <ShowGithubUser />,
};

const router = createBrowserRouter([indexRoute, usersRoute]);

const RouteRoot = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
};

export default RouteRoot;
