const { Category } = require("../models");
const { Task } = require("../models");

class CategoryController {
    static add(req, res, next) {
        const obj = {
            name: req.body.name,
            color: req.body.color
        }
        Category.create(obj)
            .then((data) => {
                console.log(data)
                res.status(201).json(data);
            })
            .catch((err) => {
                next(err);
            });
    }

    static read(req, res, next) {
        Category.findAll({
            order: [["createdAt", "ASC"]]
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
        Category.findByPk(id)
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
                name: req.body.name,
                color: req.body.color
            }
            const result = await Category.update(obj, {
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
            const resultTask = await Task.destroy({
                where: {
                    CategoryId: id
                }
            })
            
            const resultCat = await Category.destroy({
                where: {
                    id
                }
            });
            res.status(200).json({ message: "The category has been successfully deleted." });
        } catch (err) {
            console.log(err)
            next(err);
        }
    }
}

module.exports = CategoryController;