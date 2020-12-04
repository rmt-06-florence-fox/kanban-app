const {Task} = require("../models/index")

module.exports = async(req, res, next)=>{
    try{
        const data = await Task.findOne({
            where:{
                id: req.params.id,
                UserId: req.loginUser.id
            }
        })
        if(data){
            console.log("access controller")
            next()
        }
        else{
            res.status(401).json({message: `you aren't authorized to access this Task`})
        }
    }catch (e){
        console.log(e)
        res.status(500).json({message: 'internal server error'})
    }
}