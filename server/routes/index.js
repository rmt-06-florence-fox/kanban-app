const router = require('express').Router()
const taskRoutes = require('./tasks')
const userRoutes = require('./users')
const authenticate = require('../middlewares/authenticate')

router.use('/users', userRoutes)
router.use(authenticate)
router.use('/tasks', taskRoutes)

module.exports = router