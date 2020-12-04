const express = require('express');
const route = express.Router();
const Controller = require('../controllers/userController');

route.post('/register', Controller.register);
route.post('/login', Controller.login);

module.exports = route;