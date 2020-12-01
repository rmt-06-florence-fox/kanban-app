const router = require('express').Router()
const Controller = require('../controllers/controller')
const taskRouter = require('./task')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.use('/tasks', taskRouter)

module.exports = router


