// NPM Modules
import React, { Component } from 'react';

// Styles
import './App.css';

// Logic
import * as logic from './App-logic';

export default class App extends Component {
    render() {
        return (
            <div className="bemprefix__app">
                <span>App Components or Routing Goes Here</span>
                <div className="bemprefix__app-demo-wrapper">
                    {logic.generateDemoInstances(['this', 'is', 'some', 'demo', 'data'])}
                </div>
            </div>
        );
    }
}
