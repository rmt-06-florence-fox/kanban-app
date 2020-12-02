const categoryRoute = require('./categoryRoute')
const organizationRoute = require('./organizationRoute')
const taskRoute = require('./taskRoute')
const route = require('express').Router()
const UserController = require('../controllers/UserController')
const authentication = require('../middleware/authentication')

route.get('/', (req, res) => {
    res.send(`welcome`)
})
route.post('/register', UserController.register)
route.post('/login', UserController.login)
route.post('/googleLogin', UserController.googleLogin)
route.use('/organization', organizationRoute)

route.use(authentication)
route.use('/category', categoryRoute)
route.use('/task', taskRoute)


module.exports = route