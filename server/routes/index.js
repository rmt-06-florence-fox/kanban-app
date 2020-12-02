const router = require("express").Router();
const userRoutes = require("./user-router");
const taskRoutes = require("./task-router");

router.get(`/`, (req, res) => {
  res.send(`Welcome to kanban-app`);
});

router.use(`/`, userRoutes);
router.use(`/task`, taskRoutes);

module.exports = router;
