const router = require('express').Router();
const controller = require('../controllers')
const taskRouter = require('../routers/taskrouter')

router.post('/login', controller.login)
router.post('/register', controller.register)

router.use('/tasks', taskRouter)

module.exports = router;