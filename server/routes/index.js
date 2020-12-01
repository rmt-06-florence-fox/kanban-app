const route = require("express").Router();
const authentication = require("../middlewares/authentication");
const taskRoutes = require("./taskRoutes");
const userRoutes = require("../routes/userRoutes");

route.use(userRoutes);

route.use(authentication);
route.use("/tasks", taskRoutes);

module.exports = route;