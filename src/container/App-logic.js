// This is where business logic for the App container component goes

// NPM Modules
import React from 'react';

// Components
import DemoComponent from '../components/DemoComponent/DemoComponent';

/**
 * Used to generate a collection of DemoComponents
 * with unique content based on the dataValue prop
 * @param {array} demoData - A list of text items
 * @return {element} - Collection of DemoComponents
 */
export const generateDemoInstances = (demoData) => {
    const Demos = demoData.map((item) => {
        return (
            <DemoComponent
                key={item}
                dataValue={item}
            />
        );
    });

    return Demos;
};

let store = {};
let searchList = [];

var extendTreeStore = function (letters, currentBranch) {
    // Kill switch
    if (!letters.length) {
        return 'exit';
    }

    var nextBranchExists = typeof currentBranch[letters[0]] !== 'undefined';
    var newBranch;

    if (nextBranchExists) {
        newBranch = currentBranch[letters[0]];
        newBranch.stackedResults += 1;
    } else {
        currentBranch[letters[0]] = {
            stackedResults: (letters.length >= 1) ? 1 : 0,
        };

        newBranch = currentBranch[letters[0]];
    }

    // re-call the function slicing the already processed letter from the list
    extendTreeStore(letters.slice(1), newBranch);
};

var addItemToStore = function (item) {
    extendTreeStore(item.split(''), store);
};

var checkForExit = function (keyword, currentBranch) {
    // Final letter so return the stack qty
    if (keyword.length === 1) {
        return {
            canExit: true,
            matches: currentBranch[keyword[0]].stackedResults,
        };
    }

    // No matches found for the keyword since next required branch doesn't exist
    if (typeof currentBranch[keyword[0]] === 'undefined') {
        return {
            canExit: true,
            matches: 0,
        };
    }

    // Continue searching for matches
    return {
        canExit: false,
    };
};

var getStackedResults = function (keyword, currentBranch) {
    var exitResults = checkForExit(keyword, currentBranch);

    if (exitResults.canExit) {
        return exitResults.matches
    }

    if (exitResults.matches !== 0) {
        return getStackedResults(keyword.slice(1), currentBranch[keyword[0]]);
    }
};

var findMatches = function (searchList) {
    return searchList.map(function (keyword) {
        return getStackedResults(keyword.split(''), store);
    });
};

export const startConsoleDemo = (data) => {
    // isolate searches from updates
    data.forEach(function (item) {
        item = item.split(' ');

        if (item[0] === 'add') {
            addItemToStore(item[1]);
        } else {
            searchList.push(findMatches([item[1]])[0]);
        }
    });

    return searchList;
};
