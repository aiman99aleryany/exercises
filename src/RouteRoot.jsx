import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import ClickCounter from './ClickCounter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },

    {
        path: 'counter',
        element: <ClickCounter />,
    },
]);

const RouteRoot = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
};

export default RouteRoot;
