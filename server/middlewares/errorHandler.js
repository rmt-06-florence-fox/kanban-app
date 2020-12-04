module.exports = (err, req, res, next) => {
  let status = err.status || 500;
  let message = err.name || 'internal server error'

  if(message === 'SequelizeValidationError') {
    status = 400
    const error = err.errors
    message = ''
    error.forEach(el => {
      message += `${el.message}`
    });
  } else if (message === 'SequelizeUniqueConstraintError') {
    status = 400
    const error = err.errors
    message = 'Email must be in valid format !'
  }
  res.status(status).json({message})
}