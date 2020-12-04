module.exports = (err, req, res, next) => {
console.log(err, '<<err dari errhandlers');
    if(err.message){
        res.status(err.status).json({message : err.message})
    } else if (err.errors[0].message == 'email must be unique'){
        res.status(400).json({ message : 'Email registered'})
    } else {
        res.status(500).json(err)
    }
}