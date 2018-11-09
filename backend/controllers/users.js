const express = require('express')
const router = express.Router()
// JWT Token and it's m3thods
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt');
// Passport authentication methods we wrote
const passport = require('../config/passport')

// secret key to unlock and lock jwts
const config = require('../config/config')

// requiring our user to CRUD users
const mongoose = require('../models/User')
const User = mongoose.model('User')

function verifyToken(req, res, next) {
    console.log("in verify...");
    // Get auth header value
    // when we send our token, we want to send it in our header
    const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader)
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

router.post('/verify', verifyToken, (req, res) => {
    console.log("TOKEN: "+req.token)
    console.log("Secret: "+config.jwtSecret)
    let verified= jwt.decode(req.token,config.jwtSecret)
    console.log("verified: ", verified)
    res.json(verified)
}) 

// /users/  => Show all users
router.get('/', (req, res) => {
User.find({})
    .then(users => res.json(users))
});

// /users/  => Show one user
router.get('/:id', (req, res) => {
    let userId = req.params.id
    User.findById({_id:userId})
        .then(user => res.json(user))
});

// /users/signup
router.post('/signup', (req, res) => {
    // if they gave us an email and password
    if (req.body.email && req.body.username && req.body.password && req.body.first_name && req.body.last_name) {
        // creating a new user based off the req.body
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err){ 
                console.log("hashing error:", err);
                res.status(200).json({error: err})
                // we now have a successful hashed password
            }
            let newUser = {
                email: req.body.email,
                username: req.body.username,
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                password: hash,
            }
            // find a user based on that email
            User.findOne({ email: req.body.email })
                .then((user) => {
                    // if we don't have a user in our db
                    if (!user) {
                        // then we'll create a new user
                        User.create(newUser)
                            .then((user) => {
                                // if we successfully created that user
                                if (user) {
                                    // create a payload
                                    let payload = { id: user.id }
                                    // create a jwt token with that payload
                                    let token = jwt.encode(payload, config.jwtSecret)
                                    // after i've made that token, i send it back as success
                                    res.json({ token: token })
                                // user was not successfully made  
                                } else {
                                    res.sendStatus(401).json({err: 'We\'re tired.'})
                                }
                            })
                        // we already have a user in our db
                    } else {
                        res.status(401).json({err: 'Email already exists'})
                    }
                })
            })
    } else {
        // didn't have an email and password
        res.json({err: 'Invalid username or password'})
    }
});

// /users/login
router.post('/login', (req, res) => { 
// if they gave us an email and password
if (req.body.username && req.body.password) {
    // find a user by email
    User.findOne({ username: req.body.username }).then(user => {
        // if we found a user
        if (user) {
            // if user's password equals the req.body password
            bcrypt.compare(req.body.password, user.password, (err, match) => {
                if (match) {
                    // then they're who they say they are
                    // lets make a payload of their user id
                    let payload = { id: user.id }
                    // lets make a token out of their user id and our secret
                    let token = jwt.encode(payload, config.jwtSecret)
                    // lets send that new token back to them
                    res.json({ token })
                } else {
                    // email/password are incorrect
                    res.sendStatus(401)
                }   
            })
        // we didn't find that user
        } else {
            res.sendStatus(401)
        }
    })
    // didn't give us both email and password
    } else {
        res.sendStatus(401)
    }
})

module.exports = router