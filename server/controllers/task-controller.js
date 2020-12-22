const {Task, User, Column} = require('../models')

class TaskController {
     
     static async retrieve(req, res, next){
         try{
            let result = await Task.findAll({
                include : [User, Column]
            })
            res.status(200).json(result)
         
         } catch (err){
             next(err)
         }
     }

     static async create(req, res, next){
        try {
          const UserId = +req.currentUser.id
          const {title} = req.body
          const result = await Task.create({title, UserId})

          res.status(200).json({result})

        } catch (err){
          next(err)
        }
     }

    static async update(req, res, next){
      try {
        const UserId = +req.currentUser.id
        const id = +req.params.id
        const {title, ColumnId} = req.body
        const task = await Task.findByPk(id)
            
        if(task && task.UserId === UserId){
          let result = await Task.update({title, ColumnId}, {where : {id}, returning : true})

          if(result[1].length){
            res.status(200).json(result[1][0])

          } else {
            throw {
              message : 'task to be updated is not found',
              status : 404
            }
          }

        } else {
          throw {
            message: 'you have no right to edit this task',
            status: 401
          }
        }

      } catch (err){
          next(err)
      }
    }

    static async delete(req, res, next){
      try {
        const UserId = req.currentUser.id 
        const id = +req.params.id
        const task = await Task.findByPk(id)

        if(task){
          if (task.UserId == UserId){
            let result = await Task.destroy({
                where : {id}
            })
            if(result) res.status(200).json(task)
          } else {
            throw {
              message : 'you have no right to delete this task', 
              status : 401
            }
          }

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

     static async alterCategory(req, res, next){
        try{
          const {category} = req.body 
          const Userid = +req.currentUser.id
          const id = +req.params.id
          const task = await Task.findByPk(id)
          
          if(task){
            if(task.UserId == Userid){
              const result = await Task.update({category}, {where : {id},fields : ['category'], returning : true})
              
              if(result.length > 1){
                res.status(200).json(result[1][0])
              
              } else {
                throw {
                  status : 500,
                  message : 'fail to change category'
                }
              }

            } else {
              throw {
                message: 'you have no right to change category of this task',
                status: 401
              }
            }
          }
        }catch (err){
            next(err)
        }
     }
}

module.exports = TaskController