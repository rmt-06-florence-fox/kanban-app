const express = require('express')
const router = express.Router()
const taskRoute = require('./taskRoute.js')
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use('/tasks', taskRoute)

module.exports = router