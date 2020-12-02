const route = require('express').Router()
const { UserController } = require('../controllers')

//user route
route.post('/register',UserController.postRegister)
route.post('/login',UserController.postLogin)
route.post('/googleLogin',UserController.loginGoogle)

module.exports = route