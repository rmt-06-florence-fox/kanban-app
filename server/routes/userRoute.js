const route = require('express').Router()
const {UserController} = require('../controller')

route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.post('/googlelogin',UserController.googleLogin)
// route.post('/signIn', UserController.signInUser)

module.exports = route