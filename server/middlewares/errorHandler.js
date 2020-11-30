function errorHandler(error, req, res, next){
    if(error.status){
        res.status(error.status).json(error.msg)
    }
    else if(error.name === "SequelizeValidateError"){
        res.status(400).json(error.errors[0].message)
    }
    else if(error.name === "SequelizeUniqueConstraintError"){
        res.status(409).json(error.errors[0].message)
    }
    else {
        res.status(500).json(error)
    }
}

module.exports = errorHandler