// NPM Modules
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import React, { Component } from 'react';

// If using Switch routes so multiple routes could show on the one page
import { inject, observer } from 'mobx-react';

// If doing normal routing with switch routes can also remove the inject and observer wrapping the App class
import { observable } from 'mobx';

// Pages
import Home, { initialHomeStore as homeStore } from '../pages/Home/Home';
import DemoComponent, { initialDemoStore as demoStore } from '../components/DemoComponent/DemoComponent';

// Styles
import './App.css';

export default inject('store')(observer(class App extends Component {
    constructor(props) {
        super(props);

        /*
            Binding route stores in here ensures they are all connected
            this will reduce refactoring in cases where multiple components need
            to share state across routes.

            If that functionality is not needed, a slightly more performant
            approach will be to render the component directly inside the route
            as shown in the '/single' route example.

            In most cases it's unlikely 2 isolated pages (routes) will be sharing anything
            since neither of them can be rendering at the same time as the other when using <Switch>.
        */

        // Assign initial state for route components
        this.props.store.homeStore = homeStore;
    }

    render() {
        return (
            <BrowserRouter>
                <div className='bemprefix__app'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route
                            exact path='/single'
                            render={() => <DemoComponent dataValue='standaloneVersion' store={observable(demoStore)} />}
                        />
                        <Route
                            render={() => (
                                <div>
                                    <p>Page not found or index.html is being ran directly on a computer.</p>
                                    <p>To resolve, ensure index.html is served by a host and the route exists.</p>
                                </div>
                            )}
                        />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}));
