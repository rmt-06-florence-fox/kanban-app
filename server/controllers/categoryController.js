const {Category} = require('../models/index')

class CategoryController {
   static async createCategory(req,res){
      console.log(req.body)
      const payload = {
         name:req.body.name
      }
      try {
        let created = await Category.create(payload)
        console.log(created)
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
         console.log(error);
      }
   }
}

module.exports = CategoryController