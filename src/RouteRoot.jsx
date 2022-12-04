import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import Route1 from './Route1';
import Route2 from './Route2';
import Route3 from './Route3';


const indexRoute = {
    path: '/',
    element: <App />,
};

const route1 = {
    path: 'route1',
    element: <Route1 />,
};

const route2 = {
    path: 'route2',
    element: <Route2 />,
};

const route3 = {
    path: 'route3',
    element: <Route3 />,
};

const router = createBrowserRouter([
    indexRoute,
    route1,
    route2,
    route3,
]);

const RouteRoot = () => {
    return (
        <React.StrictMode>
            <RouterProvider router={router}></RouterProvider>
        </React.StrictMode>
    );

};


export default RouteRoot;
