const { ControllerUser } = require ('../controllers/index')
const user = require('express').Router()
const authentication = require ('../middlewares/authentication')

user.get('/', ControllerUser.welcome)
user.post('/login', ControllerUser.login)
user.post('/register', ControllerUser.register)
user.get('/user', authentication, ControllerUser.getUser)


module.exports = user