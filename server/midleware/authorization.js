const {Task} =require('../models/index')
const { Op } = require("sequelize");


async function authorization(req,res,next){
    console.log('=========author')
    const taskId  = +req.params.id
    const userId = req.loginUser.id
    console.log(taskId,userId)
    try {
        console.log('=============== try author')
        const taskSearched = await Task.findOne({
            where :{
                id : taskId
            }
        })

        console.log(taskSearched)
        if(taskSearched){
            console.log('======get task author')
            const owner = await Task.findOne({
                where : {
                    [Op.and] :[
                        {UserId : userId},
                        {id :taskId}
                    ]
                }
            })
            console.log('============ ')
            console.log(owner)
            if(owner){
                console.log('sini')
                next()
            }else {
                console.log('else==========')
                throw {
                    code : 401,
                    msg : 'Unauhtorize access'
                }
            }
        }else {
            console.log('======= eror 404 author')
            throw {
                code : 404,
                msg : 'Data not Found'
            }
        }
    } catch (error) {
        next(error)
    }
}

module.exports = authorization