const errorHandler = (err, req, res, next) => {
  let statusCode;
  let message;
  console.log(err)

  switch (err.name) {
    case "SequelizeValidationError":
      statusCode = 400;
      let message = [];
      err.errors.forEach(element => {
        message.push(element.message)
      });
      message.join(', ')
      break;
    case "NOT_FOUND":
      statusCode = 404;
      message = "Error Not Found"
      break;
    case "INVALID_EMAIL_PASS":
      statusCode = 400;
      message = "Email or password is incorrect"
      break;
    case "ACCESS_DENIED":
      statusCode = 403;
      message = "Forbidden Access"
      break;
    case "AUTHENTICATION_FAILED":
      statusCode = 401;
      message = "User not Authenticated"
      break;
    default:
      statusCode = 500;
      message = "Internal Server Error"
      break;
  }

  res.status(statusCode).json(message)
}

module.exports = errorHandler