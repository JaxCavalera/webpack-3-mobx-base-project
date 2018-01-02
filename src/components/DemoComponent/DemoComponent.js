// NPM Modules
import React, { Component } from 'react';

// Styles
import './DemoComponent.css';

export default class DemoComponent extends Component {
    render() {
        // Destructure injected props to reduce boilerplate
        const { dataValue } = this.props;

        return (
            <div className="bemprefix__demo-component">
                <span>{`This is a test component with a data value of ${dataValue}.`}</span>
            </div>
        );
    }
}
