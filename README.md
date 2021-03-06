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
mkdir db
mkdir models
```

NOTE: A public folder is not needed since we are using React as frontend. 

## Setting up the Frontend

Now that we got our backend, let's set up our React frontend.In your terminal, go back to the same level of your backend folder and type the following

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

We got frontend and backend folders, now it's time to connect them. But first, let's install some modules that we need. in our backend folder, terminal:

```
npm link cors
npm install cors
```
Installing cors will allow both, frontend and backend servers to communicate without installing Google Chrome CORS extension. Whis that out of the way, let's go to our server.js in our backend folder:

```javascript
const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(parser.json())

app.listen(3001, () => console.log('Listening on port 3001 :)'))
```
Then, in our db folder, lets create a connection.js file:

```
cd db
touch connection.js
```
Inside connection.js type the following:

```javascript
const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/react-node-boiler') // 'mongodb://localhost/name_of_your_database'
    .then(connection => console.log('Connection established!'))
    .catch(err => console.log('Connection failed!', err))

module.exports = mongoose
```
At this point, everything should be connected.

## Running our full-stack app

In our terminal, go to backend folder and run:

```
mongod
```

Then open another terminal window at the same level using command + t:

```
nodemon
```

If the app crashes, odds are you need to install some modules. Jus google them and npm install them. If everything works, you should the the message:

```
'Connection established!'
'Listening on port 3001 :)'
```

Finally, in your React frontend folder:

```
npm start
```

If you want, you can do a sanity check by writting an h1 tag "hello world" message in App.js. Congrats! You have a full-stack Node-React App running!
You are all set up to start coding. Just write your backend endpoints and called them from the frontend using fetch or axios.

## Extra modules

### 1. Enviromental Variables

Sometimes, there are some important variables we do not want to make public. This is very useful when using JWT tokens To do this we will use dotenv. In terminal:

```
npm install dotenv
```
Then create a .env inside backend folder or frontend folder, depending on where you're planning to use it. Here is an example how to set a env variable. Inside .env file:

```
SuperSecretTaco = SuP3rS3cR3tT4c0
```

To call this variable:

```javascript
require('dotenv').config() //call this at the top of the file

const taco = process.env.SuperSecretTaco
```
### 2. Body Parser

Parse is very useful. It's used mainly to extract the information from the input fields. To install:

```
npm install body-parser
```
This will allow you to use req.body

### 3. Authentication

Here are the following packages that are important for user authentication:
```
npm install passport
npm install jwt-simple
npm install passport-jwt
npm install bcrypt 
```

### 4. API calls

In your terminal:
```
npm install axios
```
In your project, at the top of your file:

```javascript
import axios from 'axios'
```
Here's a structure sample of an axios call:

```javascript
axios.get('http://my-url-backend-endpoint')
    .then(response => {
        // code
    })
```