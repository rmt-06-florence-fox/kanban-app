const { User, Task } = require('../models')

class TaskController {
    static async createTask (req, res, next) {
        const { title, category } = req.body
        const UserId = req.loggedInUser.id
        const payload = { title, category, UserId}

        try {
            const task = await Task.create(payload);
            res.status(201).json({task});   
        }
        catch (error) {
            next(error)
        }
    }

    static async getTask (req, res, next) {
        try {
            const task = await Task.findAll({
                include : {
                    model: User
                }
            });
            res.status(200).json({task});
        }
        catch (error) {
            next(error)
        }
    }

    static async getOneTask (req, res, next) {
        try {
            const id = +req.params.id
            const task = await Task.findByPk(id);
            res.status(200).json(task)
        } catch (error) {
            next(error)
        }
    }

    static async editTask (req, res, next) {
        try {
            const id = +req.params.id
            const { title, category } = req.body
            const payload = { title, category }
            const task = await Task.update(payload, { where: { id }, returning: true });
            res.status(200).json(task[1][0])            
        } catch (error) {
            next(error)
        }
    }

    static async deleteTask (req, res, next) {
        try {
            const id = +req.params.id
            await Task.destroy({ where: { id } });
            res.status(200).json({message: 'task succes to delete'})            
        } catch (error) {
            next(error)
        }
    }

}

module.exports = TaskController