const {Category, Task, User} = require('../models');

class Controller {
    static async getCategories(req, res){
        try{
            const allCategories = await Category.findAll({include: {model: Task, include: {model: User, attributes: ['id', 'email']}}})
            res.status(200).json(allCategories);
        } catch(error){
            res.status(500).json(error);
        }
    }

    static async add(req, res){
        const newCategory = {
            name: req.body.name
        }
        try {
            const addedCategory = await Category.create(newCategory);
            res.status(200).json(addedCategory);
        } catch(error) {
            if(error.errors[0]){
                res.status(400).json(error.errors)
            } else {
                res.status(500).json(error);
            }
        }
    }

    static async edit(req, res){
        const editId = req.params.id
        const editCategory = {
            name: req.body.name
        }
        try {
            const editedCategory = await Category.update(editCategory, {where: {id: editId}, individualHooks: true})
            res.status(200).json(editedCategory[1][0]);
        } catch(error){
            if(error.errors[0]){
                res.status(400).json(error.errors);
            } else {
                res.status(500).json(error);
            }
        }
    }
}

module.exports = Controller;