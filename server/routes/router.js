const router = require ('express').Router()
const user = require('./route-user')
const task = require('./route-task')
const authentication = require ('../middlewares/authentication')

router.use('/', user)

//start authentication
router.use(authentication)

router.use('/task',task)


module.exports = router