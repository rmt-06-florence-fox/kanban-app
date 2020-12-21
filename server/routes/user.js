const router = require("express").Router();
const UserController = require("../controllers/user-controller");

router.post("/register", UserController.postRegister);
router.post("/login", UserController.postLogin);
router.post("/googlesignin", UserController.googleAuth);

module.exports = router;
