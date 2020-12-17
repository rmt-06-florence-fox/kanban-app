const express = require ('express');
const router = express.Router();

const Controller = require('../controllers/Controller.js');
const UserController = require('../controllers/UserController.js');

const taskRouter = require('./taskRouter.js');

router.get('/', Controller.home);
router.use('/tasks', taskRouter);
router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.post('/googleLogin', UserController.googleLogin);

module.exports = router;