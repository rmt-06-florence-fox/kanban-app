const { Task } = require("../models");

class TaskController {
  static getTask(req, res, next) {
    console.log(req.userData.id);
    Task.findAll({ where: { UserId: req.userData.id } })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
  static postTask(req, res, next) {
    Task.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      UserId: req.userData.id,
    })
      .then((data) => {
        if (!data) {
          throw {
            status: 400,
            message: "Validation Error",
          };
        } else {
          res.status(201).json(data);
        }
      })
      .catch((err) => {
        next(err);
      });
  }

  static getTaskById(req, res, next) {
    Task.findOne({ where: { id: req.params.id } })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  static editTask(req, res, next) {
    Task.update(
      {
        name: req.body.name,
        description: req.body.description,
      },
      { where: { id: req.params.id }, returning: true }
    )
      .then((data) => {
        if (data) {
          res.status(200).json(data);
        } else {
          throw {
            status: 404,
            message: "Error Not Found",
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
  static deleteTask(req, res, next) {
    Task.destroy({ where: { id: req.params.id } })
      .then((data) => {
        if (data) {
          res.status(200).json({ message: "task success to delete" });
        } else {
          throw {
            status: 404,
            message: "Object Not Found",
          };
        }
      })
      .catch((err) => {
        next(err);
      });
  }
}

module.exports = TaskController;
