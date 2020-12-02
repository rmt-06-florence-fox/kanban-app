const { ControllerUser } = require ('../controllers/index')
const user = require('express').Router()

user.get('/', ControllerUser.welcome)
user.post('/login', ControllerUser.login)
user.post('/register', ControllerUser.register)


module.exports = user