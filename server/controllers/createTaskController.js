const createTaskService = require('../services/createTaskService');

module.exports = async (req, res, next) => {
  try {
    const { name, status } = req.body;
    const createdTask = await createTaskService(name, status);

    return res.status(201).json(createdTask);
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
