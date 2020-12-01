const {Task} =require('../models/index')
const { Op } = require("sequelize");


async function authorization(req,res,next){
    const taskId  = req.params.taskId
    const userId = req.loginUser.id

    try {
        const taskSearched = Task.findOne({
            where :{
                id : taskId
            }
        })

        if(taskSearched){
            const owner = Task.findOne({
                where : {
                    [Op.and] :[
                        {UserId : userId},
                        {id :taskId}
                    ]
                }
            })
            if(owner){
                next()
            }else {
                throw {
                    code : 401,
                    msg : 'Unauhtorize access'
                }
            }
        }else {
            throw {
                code : 404,
                msg : 'Data not Found'
            }
        }
    } catch (error) {
        
    }
}

module.exports = authorization