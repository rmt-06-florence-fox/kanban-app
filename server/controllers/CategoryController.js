const { Category } = require('../models/index')

class CategoryController {
    static async addCategory(req, res, next) {
        const obj = {
            name: req.body.name
        }
        try {
            if (obj.name) {
                obj.name = obj.name.toLowerCase()
                const data = await Category.create({name: obj.name})
                res.status(201).json({message: 'Category successfully created!!'})
            } else {
                throw {
                    status: 400,
                    message: 'Name is required!!'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController