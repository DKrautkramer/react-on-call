# On Call Status SPA with Admin Features

Working [demo](https://dkrautkramer.github.io/on-call-status/) (this is still the vue.js version, react is work in progress)

## What it Does

This is a demo of an on-call SPA that does the following: 
- shows a list of active on call users
- shows a list of all users and allows toggling on call status
- allows editing, adding, removing users
- shows a list of departments
- allows adding and removing of departments

The demo uses local storage to get/set any changes to users or departments mainly for demo & local build purposes. 
A default data set will be assigned if no local storage exists.

## How it works

This SPA is using React.  
- react-router-dom to handling routing/component loading 
- redux is used for state management 
- Build/development process was setup via react-create-app.
- ES6

## Local Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm start

# build for production with minification
npm run build
```
