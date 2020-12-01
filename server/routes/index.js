const route = require('express').Router()
const {UserController} = require('../controller')

route.post('/', UserController.register)
route.post('/', UserController.login)


module.exports = route