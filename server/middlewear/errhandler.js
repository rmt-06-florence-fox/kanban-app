module.exports = (err, req, res, next) => {
    if(err.status){
        res.status(err.status).json(err.message)
    } else if(err.name == 'SequelizeUniqueConstraintError'){
        res.status(400).json(err.errors[0].message)
    } else {
        res.status(500).json(err)
    }
}