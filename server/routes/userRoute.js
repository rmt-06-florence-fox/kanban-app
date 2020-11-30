const route = require('express').Router()
const {UserController} = require('../controller')

route.post('/register', UserController.register)
route.post('/login', UserController.login)


module.exports = route