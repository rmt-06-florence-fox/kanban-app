const route = require("express").Router();
const authorization = require("../middlewares/authorization");
const TaskController = require("../controllers/TaskController");

route.post("/", TaskController.add);
route.get("/", TaskController.read);
route.get("/:id", TaskController.findByPk);

route.use("/:id", authorization)
route.put("/:id", TaskController.put);
route.patch("/:id", TaskController.patch);
route.delete("/:id", TaskController.delete);

module.exports = route;