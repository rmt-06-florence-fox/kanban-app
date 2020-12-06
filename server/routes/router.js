const router = require ('express').Router()
const user = require('./route-user')
const task = require('./route-task')
const org = require('./route-org')
const categories = require ('./route-categories')
const authentication = require ('../middlewares/authentication')

router.use('/', user)

//start authentication
router.use(authentication)

router.use('/task',task)
router.use('/org',org)
router.use('/categories',categories)


module.exports = router