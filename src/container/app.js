import React, { Component } from 'react';

export function* test() {
    const me = yield 'me';
}

export default class App extends Component {
    render() {
        return (
            <div className="bemprefix__app">
                <span>App Components or Routing Goes Here</span>
            </div>
        );
    }
}
