const { Category, Task } = require('../models/index')

class CategoryController {

    static async getCategory(req, res, next){
        try {
            const data = await Category.findAll({
                include: [{
                    model: Task
                }],
                order: [['id', 'ASC']]
            })
            res.status(200).json({category: data})
        } catch (error) {
            next(error)
        }
    }

    static async addCategory(req, res, next){  

        const newCategory = {
            name: req.body.name
        }

        try {
            const data = await Category.create(newCategory)
            res.status(201).json({data})
        } catch (error) {
            next(error)
        }
    }

    static async deleteCategory(req, res){
        const id = req.params.id

        try {
            const data = await Category.destroy({
                where:{
                    id: id
                }
            })
            if(data){
                res.status(200).json({message: `Category success to delete`})
            }else{
                throw {
                    status: 404,
                    message: 'Id not found'
                }
            }
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CategoryController