const router = require("express").Router();
const TaskController = require("../controllers/task-controller");
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.get("/", authentication, TaskController.getTask);
router.get("/:id", authentication, TaskController.getTaskById);
router.post("/", authentication, TaskController.postTask);
router.put("/:id", authentication, authorization, TaskController.editTask);
router.delete("/:id", authentication, authorization, TaskController.deleteTask);

module.exports = router;
