const categoryRoute = require('./categoryRoute')
const organizationRoute = require('./organizationRoute')
const taskRoute = require('./taskRoute')
const route = require('express').Router()
const UserController = require('../controllers/UserController')
const authentication = require('../middleware/authentication')

route.post('/register', UserController.register)
route.post('/login', UserController.login)

route.use(authentication)
route.use('/task', taskRoute)
route.use('/category', categoryRoute)
route.use('/organization', organizationRoute)


module.exports = route