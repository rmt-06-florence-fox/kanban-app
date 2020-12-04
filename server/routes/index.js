const router = require("express").Router();
const routeTask = require("./task");
const routeUser = require("./user");

router.use("/tasks", routeTask);
router.use("/users", routeUser);

module.exports = router;
