import React from 'react';
import reactDOM from 'react-dom';

import App from './container/App';

const targetClassName = 'appnamehere';

/**
 * Takes a target DOM node and renders out a copy of the react application
 * @param {DOM node} targetDiv - The DOM node where the app is going to be rendered
 */
const renderToTargetDiv = (targetDiv) => {
    reactDOM.render(
        <App />,
        targetDiv
    );
};

/**
 * 
 * @param {string} appClassName - The DIV(s) class name to render the application into
 */
const findAndRenderToTarget = (appClassName) => {
    const classList = document.getElementsByClassName(appClassName);

    Array.prototype.forEach.call(classList, (currentDiv) => {
        renderToTargetDiv(currentDiv);
    });
};

findAndRenderToTarget(targetClassName);
