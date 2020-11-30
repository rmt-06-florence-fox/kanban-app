const router = require('express').Router()
const taskController = require('../controllers/task')

router.post('/', taskController.addTask)

module.exports = router