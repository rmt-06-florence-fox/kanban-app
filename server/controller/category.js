const {Category} = require('../models')

class CategoryController {

    static newCategories(req, res){
        Category.create({title: req.body.title})
        .then(data =>{
            res.status(201).json(data)
        })
        .catch(err =>{
            res.status(500).json({message: "Internal Server Error"})
        })
    }
    static showCategories(req, res){
        Category.findAll()
        .then(categories =>{
            res.status(200).json(categories)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
    }

    static destroyCategories(req,res){
        Category.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(_ =>{
            res.status(200).json({message: 'deleted'})

        })
        .catch(err =>{
            res.status(500).json({message: 'Internal Server Error'})
        })
    }
}


module.exports = CategoryController