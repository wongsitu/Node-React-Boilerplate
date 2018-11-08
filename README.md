## Boiler plate Node-React Setup

This is a guide to start applications using Node backend with React frontend. To start, let's create a folder with the name of our project

```
    mkdir myproject
    cd myproject
```
## Setting up the Backend

```
    mkdir backend
    cd backend
```

Then we need to install start our node app:

```
    npm init
```
Type in server.js for your entry point, and then you can just hit enter until npm init is done. This will create a package.json. Then we'll need to add express to our app, this will add all our dependencies:

```
    npm install --save express
```

At this point, we should see a package.json, package-lock.json and node_modules. Let's create the rest of our files:

```
    touch server.js
    mkdir controllers
    mkdir public
    mkdir db
    mkdir models
```

## Setting up the Frontend

Now that we got our backend, let's set up our React frontend. Go back to the same level of your backend folder and type the following

```
    create-react-app frontend
    cd frontend
    npm install react-router-dom
```
To include our Router,inside src, go to index.js and copy this:

```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import {
    BrowserRouter as Router
    } from "react-router-dom"

    import App from './App';

    ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
```
Now let's go to App.js and import our router elements

```javascript
    import {
        Route,
        Link,
        Switch
    } from 'react-router-dom'
```
At this point, we got all the esscentials. We can start creating a components folder inside src
Also, remove Serviceworker from index.js, the serviceWorker file and favicon.ico from public folder. We dont need these files.

```
    mkdir components
```
## Connecting frontend and backend

We got frontend and backend folders, now it's time to connect them. 