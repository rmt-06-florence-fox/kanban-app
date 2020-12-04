const router = require("express").Router();
const { TaskController } = require("../controllers");
const {
  authentication,
  authorization,
} = require("../middlewares/authentication-authorization");

router.use(authentication);
router.post("/", TaskController.add);
router.get("/", TaskController.show);
router.get("/:id", authorization, TaskController.find);
router.put("/:id", authorization, TaskController.edit);
router.delete("/:id", authorization, TaskController.remove);

module.exports = router;
