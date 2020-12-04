const route = require("express").Router()
const TaskController = require("../controllers/taskController")
const authentication = require("../middlewares/authentication")
const authorization = require("../middlewares/authorization")

route.use(authentication)
route.get('/', TaskController.getTasks)
route.post('/', TaskController.addTask)

route.put('/:id', authorization, TaskController.editTask)
route.get('/:id', authorization, TaskController.filterId)
route.delete('/:id', authorization, TaskController.deleteId)
route.patch('/:id', authorization, TaskController.patchCategory)

module.exports = route