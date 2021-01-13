const { Task } = require('../models');

module.exports = async (req, res, next) => {
	try {
		const idTask = req.params.id;
		const userId = req.loggedInUser.id;
		const task = await Task.findOne({
			where: {
				id: idTask,
			},
		});
		console.log(task);
		if (!task) {
			const errorName = 'TaskNotFound';
			next({
				name: errorName,
			});
		} else if (task.UserId === userId) {
			next();
		} else {
			const errorName = 'UnauthorizedUser';
			next({
				name: errorName,
			});
		}
	} catch (err) {
		next(err);
	}
};
