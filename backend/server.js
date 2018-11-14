const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()
const app = express()

const userController = require('./controllers/users.js')
const postController = require('./controllers/posts.js')
const commentController = require('./controllers/comments.js')

app.use(passport.initialize())
app.use(cors())
app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())

app.use('/users', userController)
app.use('/posts', postController)
app.use('./comments', commentController)

app.listen(3001, () => console.log('Listening on port 3001 :)'))