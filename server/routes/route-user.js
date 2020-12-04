const { ControllerUser } = require ('../controllers/index')
const user = require('express').Router()
const authentication = require ('../middlewares/authentication')

user.get('/', ControllerUser.welcome)
user.post('/login', ControllerUser.login)
user.post('/register', ControllerUser.register)
user.post('/google-login', ControllerUser.google)
user.get('/user', authentication, ControllerUser.getUser)
user.patch('/user/:id', authentication, ControllerUser.patchOrg)


module.exports = user