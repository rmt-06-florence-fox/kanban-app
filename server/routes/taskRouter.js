const express = require ('express');
const taskRouter = express.Router();
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

const TaskController = require('../controllers/TaskController.js');

taskRouter.use(authentication)
taskRouter.post('/', TaskController.createTask);
taskRouter.get('/', TaskController.showTask);

taskRouter.use('/:id', authorization)
taskRouter.get('/:id', TaskController.showTaskById);
taskRouter.put('/:id', TaskController.replaceTask);
taskRouter.delete('/:id', TaskController.deleteTask);


module.exports = taskRouter;