const {Task} = require('../models');

class Controller {
    static async readTask(req, res){
        try {
            const allTask = await Task.findAll();
            res.status(200).json(allTask);
        } catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
    static async addTask(req, res){
        const newTask = {
            title: req.body.title,
            description: req.body.description,
            CategoryId: Number(req.body.CategoryId),
            UserId: req.loggedIn.id
        }
        console.log(newTask);
        try {
            const addedTask = await Task.create(newTask);
            console.log(addedTask);
            res.status(200).json(addedTask);
        } catch(error){
            console.log(error);
            if(error.errors[0]){
                res.status(400).json(error.errors);
            }
            res.status(500).json(error);
        }
    }
    static async editTask(req, res){
        const idToEdit = Number(req.params.id);
        const editTask = {
            title: req.body.title,
            description: req.body.description
        }
        try {
            const editedTask = await Task.update(editTask, {where: {id: idToEdit}, individualHooks: true})
            res.status(200).json(editedTask[1][0]);
        } catch(error){
            console.log(error);
            if(error.errors[0]){
                res.status(400).json(error.errors);
            } else {
                res.status(500).json(error);
            }
        }
    }
    static async editCategoryTask(req, res){
        const idToEdit = Number(req.params.id);
        const editCategory = {
            CategoryId: Number(req.body.category)
        }
        try {
            if (isNaN(editCategory.CategoryId)){
                throw {
                    status: 400,
                    message: "CategoryId Required"
                }
            };
            const editedTask = await Task.update(editCategory, ({where: {id: idToEdit}, individualHooks: true}))
            res.status(200).json(editedTask[1][0]);
        } catch(error){
            if(error.status === 400){
                res.status(error.status).json({message: error.message});
            } else {
                res.status(500).json(error);
            }
        }
    }
    static async removeTask(req, res){
        const idToDelete = Number(req.params.id);
        try {
            await Task.destroy({where: {id: idToDelete}})
            res.status(200).json({message: "Task Deleted"});
        } catch(error){
            res.status(500).json(error);
        }
    }
}


module.exports = Controller;