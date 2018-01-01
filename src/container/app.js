// NPM Modules
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Pages
import Home from '../pages/Home/Home';
import DemoComponent from '../components/DemoComponent/DemoComponent';

// Styles
import './App.css';

// Initial State
export const initialState = {};

export default inject('store')(observer(class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='bemprefix__app'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/single' render={() => <DemoComponent dataValue='standaloneVersion' />} />
                        <Route render={() => <div>page not found or index.html is being ran directly on a computer instead of hosted so routes won't work</div>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}));
