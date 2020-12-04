const express = require('express');
const route = express.Router();
const Controller = require('../controllers/categoryController');

route.get('/', Controller.getCategories);
route.post('/', Controller.add);
route.put('/:id', Controller.edit);


module.exports = route;