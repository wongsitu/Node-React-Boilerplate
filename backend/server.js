const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(parser.json())

app.listen(3001, () => console.log('Listening on port 3001 :)'))