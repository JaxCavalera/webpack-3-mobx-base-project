// NPM Modules
import React, { Component } from 'react';

// Styles
import './App.css';

// Logic
import * as logic from './App-logic';

// Constants
import * as constants from './App-constants';

export default class App extends Component {
    render() {

        const output = logic.startConsoleDemo(constants.demoData);
        console.log('Output: ', output);
        console.log('Expected Output: ', constants.result);
        const isIdentical = !output.some((item, index) => constants.result[index] !== item);
        console.log(isIdentical ? 'Success' : 'Fail');

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
