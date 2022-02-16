const deleteTasksService = require('../services/deleteTaskService');

// eslint-disable-next-line consistent-return
module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await deleteTasksService(id);

    return res.status(204).json(deletedTask);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
