# Introduction
This is a basic starter for building out webpack 3 + react applications.    

It makes a few assumptions:    
- You may be wanting to render the application out to more than one location on a page.
- You plan to release a copy of your application into production usage so the config is split out to allow for this.
- You are working in a team that may have or does have both Windows and MAC dev machines.
- You are planning to use the BEM naming convention for all classNames prefixing them with your project
- You prefer using MobX over Redux for state management

# Install
**Before continuing**, if you do not plan to use client-side routing, open up `package.json` and delete the react-router entry from the Dependencies list.

To install, just run `npm i` in a terminal / cmd prompt at the project root directory

# Usage
Change the class name in `build/index.html` so it matches up with the one you are specifying in the `src/index.js` file as the **targetClassName** value.

Search and Replace the project BEM prefix **bemprefix** with the BEM prefix you want to use for your project.

## TODO
- Implement Stylelint
