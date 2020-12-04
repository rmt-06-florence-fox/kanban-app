const { Task } = require("../models/index")

class ControllerTask {
    static showAllDataTask(req, res, next) {
        Task.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static createDataTask(req, res, next) {
        
        let objTask = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.dataUser.id
        }

        Task.create(objTask)
            .then(data => {
                res.status(202).json(data)
            })
            .catch(err => {
                next(err)
            })
    }

    static updateDataTask(req, res, next) {
        let objTask = {
            title: req.body.title,
            category: req.body.category
        }
        
        let id = req.params.id

        Task.update(objTask, {
            where: {
                id
            },
            returning: true // jangan lupa pakai returning biar bisa balikin data yang dirubah
        })
            .then(data => {
                if(data[1].length >= 1) {
                    res.status(200).json(data)
                }else {
                    throw {
                        status: 400,
                        message: { error: "error not found" }
                    }
                }
            })
            .catch(err => {
                next(err)
            })
        
    }

    static modifyDataTask(req, res, next) {
        let id = req.params.id
        let category = req.body.category
        

        Task.update({category}, {
            where: {
                id
            },
            returning: true
        })
            .then(data => {
                console.log(data)
                if(data[1].length >= 1) {
                    res.status(200).json(data)
                }else {
                    throw {
                        status: 400,
                        message: { error: "error not found" }
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static destroyDataTask(req, res, next) {
        let id = req.params.id
    
        Task.destroy({
            where: {
                id
            }
        })
            .then(data => {
                console.log(data)
                if(data) {
                    res.status(200).json({ The_number_of_destroyed_rows: data})
                }else {
                    throw {
                        status: 400,
                        message: { error: "error not found" }
                    }
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = ControllerTask