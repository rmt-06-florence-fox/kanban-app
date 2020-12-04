const route = require("express").Router();
const authentication = require("../middlewares/authentication");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const taskRoutes = require("./taskRoutes");

route.use(userRoutes);

route.use(authentication);
route.use("/categories", categoryRoutes);
route.use("/tasks", taskRoutes);

module.exports = route;