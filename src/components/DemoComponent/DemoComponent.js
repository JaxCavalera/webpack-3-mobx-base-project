// NPM Modules
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// Styles
import './DemoComponent.css';

// Logic
import * as logic from './DemoComponent-logic';

// Actions used to update the store
import * as actions from './DemoComponent-actions';

// Initial state
export const initialDemoStore = {
    inputValue: '',
};

export default inject('store')(observer(class DemoComponent extends Component {
    // Use methods over anonymous fn when currying actions or state into business logic
    callHandleInputUpdate = (e) => {
        logic.handleInputUpdate(this.props.store.homeStore[this.props.uuid], e.target.value, actions.updateTextInput);
    }

    render() {
        // Destructure injected props to reduce boilerplate
        const { dataValue, uuid } = this.props;
        console.log(`just rendered ${uuid}`);

        // Destructure store items to reduce boilerplate
        const { inputValue } = this.props.store.homeStore[uuid];

        return (
            <div className="bemprefix__demo-component">
                <span>{`This is a test component with a data value of ${dataValue}.`}</span>
                <input type="text" value={inputValue} onChange={this.callHandleInputUpdate} />
            </div>
        );
    }
}));
