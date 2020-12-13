const { Task } = require("../models");
const { User } = require("../models");

class TaskController {
    static add(req, res, next) {
        const obj = {
            title: req.body.title,
            description: req.body.description,
            due_date: req.body.due_date,
            UserId: req.loggedInUser.id,
            CategoryId: req.body.CategoryId
        }
        Task.create(obj)
            .then((data) => {
                res.status(201).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static read(req, res, next) {
        Task.findAll({
            order: [["updatedAt", "DESC"]],
            include: {
                model: User
            }
        })
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
               next(err);
            });
    }

    static findByPk(req, res, next) {
        const id = Number(req.params.id);
        Task.findByPk(id)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static async put(req, res, next) {
        try {
            const id = Number(req.params.id);
            const obj = {
                title: req.body.title,
                description: req.body.description,
                due_date: req.body.due_date,
                UserId: req.loggedInUser.id,
                CategoryId: req.body.CategoryId
            }
            const result = await Task.update(obj, {
                where: {
                    id
                },
                returning: true
            });
            res.status(200).json(result[1][0]);
        } catch (err) {
            next(err);
        }
    }

    static async patch(req, res, next) {
        try {
            const id = Number(req.params.id);
            const obj = {
                CategoryId: req.body.CategoryId
            }
            const result = await Task.update(obj, {
                where: {
                    id
                },
                returning: true
            });
            res.status(200).json(result[1][0]);
        } catch (err) {
            next(err);
        }
    }

    static async delete(req, res, next) {
        try {
            const id = Number(req.params.id);
            const result = await Task.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({ message: "The task has been successfully deleted." });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = TaskController;