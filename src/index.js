import React from 'react';
import {createRoot} from 'react-dom/client';
import RouteApp from './RouteApp';

const run = () => {
    const container = document.querySelector('#root');
    const root = createRoot(container);
    const app = <RouteApp />;

    root.render(app);
}

// RUN APPLICATION
run();



