// NPM Modules
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Styles
import './Home.css';

// Logic
import * as logic from './Home-logic';

// Constants
import * as constants from './Home-constants';

export default inject('store')(observer(class Home extends Component {
    constructor(props) {
        super(props);
        this.appStore = this.props.store.appStore;
    }

    render() {
        return (
            <div className="bemprefix__app">
                <span>Home Page Content Goes Here including sub-routes</span>
            </div>
        );
    }
}));
