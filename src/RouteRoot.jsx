import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './Error';

const indexRoute = {
    path: '/',
    element: <App />,
    errorElement: <Error />,
};

const router = createBrowserRouter([indexRoute]);

const RouteRoot = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
};

export default RouteRoot;
