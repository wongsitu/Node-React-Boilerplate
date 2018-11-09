const express = require('express')
const router = express.Router()

const mongoose = require('../models/Comment')
const Comment = mongoose.model('Comment')


module.exports = router