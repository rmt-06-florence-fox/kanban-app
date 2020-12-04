const express = require('express');
const route = express.Router();
const Controller = require('../controllers/taskController');
const {authorization} = require('../middlewares/authorization');

route.get('/', Controller.readTask);
route.post('/', Controller.addTask);

route.use('/:id', authorization);

route.put('/:id', Controller.editTask);
route.patch('/:id', Controller.editCategoryTask);
route.delete('/:id', Controller.removeTask);


module.exports = route;