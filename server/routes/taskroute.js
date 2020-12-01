const router = require('express').Router()
const TaskController = require('../controllers/taskcontroller')
const { authentication, authorization } = require('../middlewares')

router.use(authentication)
router.get('/', TaskController.getTask)

module.exports = router