const mongoose = require('mongoose')

mongoose.Promise = Promise

// 'mongodb://mongo:27017/react-node-boiler' => Use this route to run docker compose

mongoose.connect('mongodb://localhost/react-node-boiler')
    .then(connection => console.log('Connection established!'))
    .catch(err => console.log('Connection failed!', err))

module.exports = mongoose