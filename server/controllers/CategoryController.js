const {Category} = require('../models/index')

class CategoryController {
    static async createCategory (req, res, next) {
        try {
            let obj = {
                title: req.body.title
            }
            let data = await Category.create(obj)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async getCategory(req,res, next){
        try {
            let data = await Category.findAll()
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController