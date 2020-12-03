const { Task } = require("../models");

class TaskController {
  static async add(req, res, next) {
    const data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.loggedInUser.id,
    };
    try {
      const task = await Task.create(data);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }
  static async show(req, res, next) {
    try {
      const task = await Task.findAll({
        where: { UserId: req.loggedInUser.id },
      });
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }
  static async find(req, res, next) {
    let id = +req.params.id;
    try {
      const task = await Task.findOne({ where: { id } });
      if (task) {
        res.status(200).json(task);
      } else {
        throw {
          status: 404,
          message: "Error, Not Found!",
        };
      }
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    const id = req.params.id;
    const data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.loggedInUser.id,
    };
    try {
      const updated = await Task.update(data, {
        where: {
          id,
        },
        returning: true,
      });
      if (updated[0] !== 0) {
        res.status(200).json(updated[1][0]);
      } else {
        throw {
          status: 404,
          message: "Error, Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
  static async remove(req, res, next) {
    try {
      const id = +req.params.id;
      const task = await Task.destroy({
        where: {
          id,
        },
      });
      if (task) {
        res.status(200).json({ message: "task success to delete" });
      } else {
        throw {
          status: 404,
          message: "Error, Not Found",
        };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = TaskController;
