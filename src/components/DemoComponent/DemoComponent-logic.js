// NPM Modules
import React from 'react';

// This is where business logic for the Home container component goes

/**
 * Updates the store with a new value
 * @param {object} store - Observable store for this instance of the DemoComponent
 * @param {string} newValue - The new value being updated for the text input field
 * @param {function} updateTextInput - An action used to update the store
 */
export const handleInputUpdate = (store, newValue, updateTextInput) => {
    if (store.inputValue !== newValue) {
        updateTextInput(store, newValue);
    }
};


export const makeApiReq = async () => {
    const result = await fetch('http://localhost:8081/test')
        .then(response => response.json((json) => {
            return json;
        }));

    return result;
};

export const fetchData = (store) => {
    makeApiReq().then(result => {
        store.testJson = result;
    });
};

export const showData = (testObj) => {
    return Object.keys(testObj).map(item => {
        return (
            <span key={testObj[item]}>{testObj[item]}</span>
        );
    });
};
