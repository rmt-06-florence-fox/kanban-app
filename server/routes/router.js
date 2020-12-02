const router = require ('express').Router()
const user = require('./route-user')
const task = require('./route-task')


router.use('/', user)
router.use('/task',task)


module.exports = router