import React, { Component } from 'react';

// Components
import Test from '../components/test';

// Styles
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="bemprefix__app">
                <span>App Components or Routing Goes Here</span>
                <Test />
            </div>
        );
    }
}
