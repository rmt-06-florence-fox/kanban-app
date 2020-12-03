
function errorHandler(err,req,res,next){
    let msg = err.msg || err.message
    if(err.errors){
        msg = err.errors[0].message
    }else if(err.msg){
        msg = err.msg 
    }else{
        msg = err.message
    }
    let status = err.status || 500
    if(msg.includes('Validation') || msg.includes('unique')){
        status = 400
    }
    if(msg == 'email must be unique') msg = 'Email has been taken'
    console.log(msg);
    res.status(status).json({msg: msg})
}

module.exports = errorHandler