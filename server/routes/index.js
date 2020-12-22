const router = require('express').Router()
const userRouter = require('./userroute')
const taskRouter = require('./taskroute')

router.get('/', (req, res) => res.send('Hello'))
router.use('/', userRouter)
router.use('/tasks', taskRouter)

module.exports = router