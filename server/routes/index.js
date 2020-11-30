const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const taskRoutes = require('./task')
const userRoutes = require('./user')

router.use('/', userRoutes)
router.use(authentication)
router.use('/tasks', taskRoutes)

module.exports = router