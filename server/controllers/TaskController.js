const { Task } = require('../models/index.js');

class TaskController {
    static createTask(req, res, next) {       
        Task.create({
          title: req.body.title,
          category: req.body.category,
          UserId: req.loggedInUser.id
        })
        .then(data => {
            if (data) {
                res.status(201).json(data);
            } 
            else {
                throw {
                    status: 400,
                    message: 'validation errors'
                }             
            }
        })
        .catch(err => {
            next(err)
        });
    }

    static showTask(req, res, next) {
        Task.findAll({
            where: {
                UserId: req.loggedInUser.id
            }
        })
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            next(err)
        });
    }
    
    static showTaskById(req, res, next) {
        Task.findByPk(req.params.id)
        .then(data => {
            if (data) {
                res.status(200).json(data);
            } 
            else {
                throw {
                    status: 404,
                    message: 'error not found'
                }            
            }
        })
        .catch(err => {
            next(err)
        });
    }

    static replaceTask(req, res, next) {
        Task.update(
          {
            title: req.body.title,
            category: req.body.category,
          },
          { where: { id: req.params.id }, 
          returning: true }
        )
        .then(data => {
            console.log(data)
            if (data) {
                res.status(200).json(data[1][0]);
            } 
            else {
                throw {
                    status: 404,
                    message: 'error not found'
                }
            }
        })
        .catch(err => {
            next(err)
        });        
    }

    static deleteTask(req, res, next) {
        Task.destroy({ where: { id: req.params.id } })
        .then(data => {
            if (data) {
                res.status(200).json({ message: 'Task success to delete' });
            } 
            else {
                throw {
                    status: 404,
                    message: 'error not found'
                }
            }
        })
        .catch(err => {
            next(err)
        });
    }
}

module.exports = TaskController;