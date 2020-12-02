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
router.use(authorization);
router.put("/tasks/:id", taskController.updateTask);
router.patch("/tasks/:id", taskController.updateTaskCategory);
router.delete("/tasks/:id", taskController.delete);

module.exports = router;