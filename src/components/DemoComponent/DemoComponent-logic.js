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
