import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import App from './App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App name="This is a test, and it's working great"/>,
    },
]);

const RouteApp = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );
};

export default RouteApp;
