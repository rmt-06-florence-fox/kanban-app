const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller')

console.log('di route user')
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googleLogin', UserController.googleLogin)

module.exports = router