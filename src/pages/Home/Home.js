// NPM Modules
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Styles
import './Home.css';

// Logic
import * as logic from './Home-logic';

// Child Components
import DemoComponent, { initialDemoStore as demoStore } from '../../components/DemoComponent/DemoComponent';

// Initial State
export const initialHomeStore = {
    // Unless demoData was being changed by some function in Home it normally wouldn't need to be kept in state
    // This is for demo purposes to show how to maintiain a singleton store using Routes
    demoData: ['here', 'is', 'some', 'demo', 'data'],
};

export default inject('store')(observer(class Home extends Component {
    render() {
        // Destructuring to reduce boilerplate
        const { homeStore } = this.props.store;

        return (
            <div className="bemprefix__home">
                <div className="bemprefix__home-demos-wrapper">
                    {logic.generateDemoInstances(homeStore, DemoComponent, demoStore)}
                </div>
            </div>
        );
    }
}));
