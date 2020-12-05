const route = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

route.post("/", CategoryController.add);
route.get("/", CategoryController.read);
route.get("/:id", CategoryController.findByPk);
route.put("/:id", CategoryController.put);
route.delete("/:id", CategoryController.delete);

module.exports = route;