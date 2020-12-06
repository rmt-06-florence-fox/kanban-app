const { Category } = require('../models/index')

class ControllerCategory {
    static async add (req, res, next) {
        try {
            const newCat = await Category.create(req.body)
            res.status(201).json(newCat)
        } catch (err) {
            next(err)
        }
    }

    static async addBulk (req, res, next) {
        try {
            console.log(req.body.name)
            const bulkCat = await Category.bulkCreate(req.body.name, {
                returning: true
            })
            res.status(201).json(bulkCat)
        } catch (err) {
            next(err)
        }
    }

    static async editName (req, res, next) {
        try {
            const editName = await Category.update(req.body, {
                where: {
                    id: req.params.id
                },
                returning: true
            })
            res.status(200).json(editName)
        } catch (err) {
            next(err)
        }
    }

    static async delete (req, res, next) {
        try {
            const delCat = await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.status(200).json({message: `category deleted`})
        } catch (err) {
            next(err)
        }
    }
}

module.exports = ControllerCategory