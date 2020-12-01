const {Task} = require('../models')
const { param } = require('../routers')

class TaskController {
     
     static async retrieve(req, res, next){
         try{
            let result = await Task.findAll()
            res.status(200).json(result)
         } catch (err){
             next(err)
         }
     }

     static async create(req, res, next){
         try {
             let {title, category} = req.body
             let result = await Task.create({title, category})

             res.status(200).json({result})

         } catch (err){
             next(err)
         }
     }

     static async update(req, res, next){
         try {
             let id = +req.params.id
             let {title, category} = req.body
             let result = await Task.update({title, category}, {where : {id}, returning : true})

            if(result[1].length){

                res.status(200).json(result[1][0])

            } else {
                throw {
                    message : 'task to be updated is not found',
                    status : 404
                }
            }

         } catch (err){
             next(err)
         }
     }

     static async delete(req, res, next){
         try {
            let id = +req.params.id
            let search = await Task.findByPk(id)

            if(search){
                let result = await Task.destroy({
                    where : {id}
                })
                if(result)res.status(200).json(search)
            } else {
                throw {
                    status : 404,
                    message : 'cannot find task you want to delete'
                }
            }

         } catch(err){
             next(err)
         }
     }
}

module.exports = TaskController