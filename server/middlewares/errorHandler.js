module.exports = (err, req, res, next) => {
	let status = 500;
	let message = 'Internal Server Error';
	console.log(err);
	// console.log(err.name);

	if (err.name === 'SequelizeValidationError') {
		status = 400;
		message = [];
		err.errors.forEach((el) => {
			message.push(el.message);
		});
	} else if (err.name === 'SequelizeUniqueConstraintError') {
		status = 400;
		message = 'This Email has been Taken, try another one';
	} else if (err.name === 'InvalidAccountOrPassword') {
		status = 400;
		message = 'Invalid Account Or Password';
	} else if (err.name === 'TaskNotFound') {
		status = 404;
		message = 'Task Not Found';
	} else if (err.name === 'UnauthorizedUser') {
		status = 401;
		message = 'You dont have authorization for this Task';
	} else if (err.name === 'NotLoginYet') {
		status = 401;
		message = 'Please Login First';
	} else if (err.name === 'JsonWebTokenError') {
		status = 404;
		message = "Invalid Account Or Password'";
	} else if (err.name === 'EmailOrPasswordCannotBeNull') {
		status = 400;
		message = 'Email or Password Cannot be Empty';
	} else if (err.name === 'CategoryCannotBeNull') {
		status = 400;
		message = 'Category Cannot be Empty';
	} else if (err.name === 'NoGoogleToken') {
		status = 401;
		message = 'Unauthorized User - No Google Token';
	}
	res.status(status).json({
		message: message,
	});
};
