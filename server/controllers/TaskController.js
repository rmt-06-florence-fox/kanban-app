const {User,Task,Category} = require('../models')

class TaskController{
  static async showtask(req,res,next){

    try{
      const tasks = await Task.findAll({
        order : [ [ 'updatedAt', 'ASC' ] ]
        ,
        include : [
          { model : Category,
            attributes : ['name']
            },
            { model : User,
              attributes : ['email']
              }
          
        ], 
        
      })
      console.log(tasks)

      
      res.status(200).json(tasks)
    }
    catch(error) {
      console.log(error)
      next(error)
    }

  }

  static async showCategory(req,res,next){

    try{
      const category = await Category.findAll()
      console.log(category)

      
      res.status(200).json(category)
    }
    catch(error) {
      console.log(error)
      next(error)
    }

  }
  static async findIdtask(req,res,next){
    const UserId = req.loginUser.id

    try{
      const tasks = await Task.findOne({ where:{id:UserId},
        attributes : {
          exclude : [ 'updatedAt', 'createdAt' ]
        },
        order : [ [ 'updatedAt', 'ASC' ] ]
        ,
        include : [
          { model : User,
            attributes : ['name']
            },
            { model : Category,
              attributes : ['name']
              }
        ]
      })
      res.status(200).json(tasks)
    }
    catch(error) {
      next(error)
    }
    
  }
  static async addtask(req,res,next){

    console.log("masuk ad <<<<<<<<<<<<<")

     try {
      let category = await Category.findAll()

      let categoryName = category[+req.body.CategoryId - 1].name
       
      
          const task = {
            title: req.body.title,
            category: categoryName,
            CategoryId: req.body.CategoryId,
            UserId: req.loginUser.id
          }
       let data = await Task.create(task)
       res.status(201).json(data)
     }
     catch (error){
       console.log(error)
  
        // next(error)
       
     }
 

  }

  static async edittask(req,res,next){
    let id= req.loginUser.id
    console.log("masuk edit <<<<<<<<<<<<<")

    try {
      let category = await Category.findAll()
      let categoryName = category[+req.body.CategoryId - 1].name
        console.log(categoryName)
         const updateTask = {
           title: req.body.title,
           category: categoryName,
           CategoryId: req.body.CategoryId,
           UserId: req.loginUser.id
         }
      const data = await Task.update(updateTask,{
        where: { 
          id: req.params.id,
          UserId: req.loginUser.id 
        }, returning:true
      })
      console.log(data[1][0])
      res.status(200).json(data[1][0])

    }
    catch (error){
      console.log(error)
      
          next(error)
    }
    
  }
  static async changeCategory(req,res,next){

    console.log("masuk patch <<<<<<<<<<<<<")

    try {

        // console.log(categoryName)
         const updateTask = {
           CategoryId: req.body.CategoryId
         }
      const data = await Task.update(updateTask,{
        where: { 
          id: req.params.id,
          UserId: req.loginUser.id 
        }, returning:true
      })
      res.status(200).json(data[1][0])

    }
    catch (error){
      console.log(error)
          next(error)
    }
    
  }


  static async deletetask(req,res,next){
    const id = req.params.id
    try {

      await Task.destroy({ where : { id }})
      res.status(200).json({ message : 'Task deleted'})

    } catch (error) {
      next(error)
    }
    
  }

}

module.exports = TaskController