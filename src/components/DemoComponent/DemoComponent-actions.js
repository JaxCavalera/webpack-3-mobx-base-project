// This is the only place that a store should be updated

export const updateTextInput = (store, newValue) => {
    store.inputValue = newValue;
};
