const { ControllerTask } = require ('../controllers')
const task = require('express').Router()


task.get('/', ControllerTask.findAll)

module.exports = task