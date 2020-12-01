const router = require('express').Router();
const { TaskController, UserController } = require('../controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.post('/googleLogin', UserController.googleLogin);

router.use(authentication);

router.post('/tasks', TaskController.create);

router.get('/tasks', TaskController.getAllTasks);

router.get('/tasks/:id', TaskController.getTask);

router.patch('/tasks/:id', authorization, TaskController.updateTask);

router.put('/tasks/:id', authorization, TaskController.editTask);

router.delete('/tasks/:id', authorization, TaskController.deleteTask);

module.exports = router;
