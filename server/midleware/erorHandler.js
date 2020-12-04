

function erorHandler (err,req,res,next){
    console.log('=========Eror Handler MidleWare========')
    console.log(err)

    if(err.code){
        console.log('========= Custom Error ========')
        res.status(err.code).json({message : err.msg})
    }else if(err.name == 'SequelizeValidationError' || err.name == 'SequelizeUniqueConstraintError'){
        console.log('========= Sequelize Error========')
        console.log(err.errors[0].message)
        console.log(err.errors.length)

        if(err.errors.length == 1){
            res.status(400).json({
                msg : err.errors[0].message
            })
        }else {
            let message = err.errors.map(element =>{
                return element.message
            })
            res.status(400).json({
                message : message
            })
        }
    }else {
        console.log('========= Internal Server Error======')
        res.status(500).json({

            message : 'internal server eror'
        })
    }
}

module.exports = erorHandler