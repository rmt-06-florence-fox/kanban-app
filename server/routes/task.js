const route = require('express').Router()
const {TaskController} = require('../controller')
const authorization = require('../middleware/authorization')

route.post('/', TaskController.create)
route.get('/', TaskController.seeList)
route.use('/:id', authorization)
route.get('/:id', TaskController.seeData)
route.put('/:id', TaskController.update)
route.patch('/:id', TaskController.patch)
route.delete('/:id', TaskController.delete)


module.exports = route