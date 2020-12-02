const route = require('express').Router()
const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')


route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.use(authentication)



module.exports = route