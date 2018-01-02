// NPM Modules
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Styles
import './Home.css';

// Logic
import * as logic from './Home-logic';

// Initial State
export const initialState = {
    placeholderItem: 'some placeholder value',
};

export default inject('store')(observer(class Home extends Component {
    constructor(props) {
        super(props);
        this.appStore = this.props.store.appStore;
    }

    render() {
        return (
            <div className="bemprefix__home">
                <div className="bemprefix__home-demos-wrapper">
                    {logic.generateDemoInstances(['here', 'is', 'some', 'demo', 'data'])}
                </div>
            </div>
        );
    }
}));
