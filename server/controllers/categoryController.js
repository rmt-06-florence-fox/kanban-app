const {Category} = require('../models/index')

class CategoryController {
   static async createCategory(req,res){
      const payload = {
         name:req.body.name
      }
      try {
        let created = await Category.create(payload)
        res.status(201).json({data:created})
      } catch (error) {
         console.log(error)
      }
   }

   static async readAllCategory(req,res){
      try {
         let categories = await Category.findAll()
         res.status(200).json({data:categories})
      } catch (error) {
         
      }
   }
}

module.exports = CategoryController