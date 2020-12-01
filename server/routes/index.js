const router = require('express').Router()
const userRouter = require('./userroute')
const taskRouter = require('./taskroute')

router.use('/', userRouter)
router.use('/tasks', taskRouter)

module.exports = router