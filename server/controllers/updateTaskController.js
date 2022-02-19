const updateTasksService = require('../services/updateTaskService');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;

    const updateTask = await updateTasksService(id, name, status);

    return res.status(200).json(updateTask);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
