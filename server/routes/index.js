const express = require('express')
const router = express.Router()
const TaskRouter = require('./task-route')
const UserRouter = require('./user-route')
const authentication = require('../middlewares/authentication')

router.use('/', UserRouter)

router.use(authentication)
router.use('/task', TaskRouter)

module.exports = router