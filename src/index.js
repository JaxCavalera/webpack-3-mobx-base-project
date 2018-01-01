// NPM Modules
import React from 'react';
import reactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import { observable } from 'mobx';

// Component
import App, { initialState as appStore } from './container/App';

const store = observable({
    appStore,
});

/**
 * Used to render out a copy of the react application (nested inside Component) to the targetDiv
 * @param {DOM node} targetDiv - The DOM node where the app is going to be rendered
 * @param {element} Component - Base container component that the application loads into
 */
const renderToTargetDiv = (targetDiv, Component) => {
    reactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        targetDiv,
    );
};

/**
 * Used to find all instances of a specific className and render a copy of the application to each of them
 * @param {string} appClassName - The DIV(s) class name to render the application into
 */
const findAndRenderToTarget = (appClassName) => {
    const classList = global.document.getElementsByClassName(appClassName);

    Array.prototype.forEach.call(classList, (currentDiv) => {
        renderToTargetDiv(currentDiv, App);

        // Hot Module Reloading - auto disables when in production
        if (module.hot) {
            module.hot.accept('./container/App', () => renderToTargetDiv(currentDiv, App));
        }
    });
};

// This is where it all starts
findAndRenderToTarget('appnamehere');
