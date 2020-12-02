const { ControllerTask } = require ('../controllers')
const task = require('express').Router()


task.get('/', ControllerTask.finByOrg)
task.get('/all', ControllerTask.findAll)

module.exports = task