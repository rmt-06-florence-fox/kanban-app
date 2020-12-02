
function errorHandler(err,req,res,next){
    let msg = err.message || err.msg
    let status = err.status || 500
    if(msg.includes('Validation')){
        status = 400
    }
    console.log(err);
    res.status(status).json({msg: msg})
}

module.exports = errorHandler