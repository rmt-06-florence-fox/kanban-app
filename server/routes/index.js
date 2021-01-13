const router = require("express").Router();
const taskController = require("../controllers/taskController");
const userController = require("../controllers/userController"); 
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");

router.post("/register", userController.register);
router.post("/login", userController.login);

router.use(authentication);
router.get("/tasks", taskController.viewAllTask);
router.post("/tasks", taskController.addTask);
router.put("/tasks/:id", authorization, taskController.updateTask);
router.patch("/tasks/:id", authorization, taskController.updateTaskCategory);
router.delete("/tasks/:id", authorization, taskController.delete);

module.exports = router;