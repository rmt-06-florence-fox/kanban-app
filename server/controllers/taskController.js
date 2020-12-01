const { Task } = require("../models/index")
const task = require("../models/task")

class ControllerTask {

    static showAllDataTask(req, res) {
        console.log("----------")

        Task.findAll()
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static createDataTask(req, res) {
        
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
                res.status(500).json(err)
            })
    }

    static updateDataTask(req, res) {
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
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    static modifyDataTask(req, res) {
        let id = req.params.id
        let category = req.body.category

        Task.update(category, {
            where: {
                id
            },
            returning: true
        })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static destroyDataTask(req, res) {
        let id = req.params.id
        task.destroy({
            where: {
                id
            }
        })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = ControllerTask