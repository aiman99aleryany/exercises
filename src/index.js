import React from 'react';
import { createRoot } from 'react-dom/client';
import RouteRoot from './RouteRoot';

const run = () => {
    const container = document.querySelector('#root');
    const root = createRoot(container);
    const app = <RouteRoot />;

    root.render(app);
};

run();
