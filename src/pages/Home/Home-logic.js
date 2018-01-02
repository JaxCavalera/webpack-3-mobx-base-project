// This is where business logic for the Home container component goes

// NPM Modules
import React from 'react';
import { observable } from 'mobx';

/**
 * Used to generate a collection of DemoComponents
 * with unique content based on the dataValue prop
 * @param {object} homeStore - Observable store for the Home component
 * @param {element} DemoComponent - The component being instantiated
 * @param {object} demoStore - Observable initial state for the instantiated component
 * @return {element} - Collection of DemoComponents
 */
export const generateDemoInstances = (homeStore, DemoComponent, demoStore) => {
    return homeStore.demoData.map((item) => {
        // Generate nested dynamic stores using the unique key
        homeStore[item] = observable(demoStore);

        return (
            <DemoComponent
                key={item}
                uuid={item}
                dataValue={item}
            />
        );
    });
};
