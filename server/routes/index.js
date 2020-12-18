const router = require("express").Router();
const { user, task } = require("../controllers/index.js");
const { authentication, authorization } = require("../middlewares/index.js");

//testing
router.get("/", (req, res, next) => {
  res.send("hello world!");
});

//user-utilities
router.post("/login", user.login);
router.post("/register", user.register);
router.post("/gsignin", user.loginGoogle);

//authentication
router.use(authentication);
router.get("/tasks", task.get);
router.post("/tasks", task.create);

//authorization
router.use("/tasks/:id", authorization)
router.put("/tasks/:id", task.update);
router.delete("/tasks/:id", task.delete);
router.patch("/tasks/:id", task.move);

module.exports = router;
