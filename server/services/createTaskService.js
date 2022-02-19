const createTaskModel = require('../models/createTaskModel');
const findTaskByNameModel = require('../models/findTaskByNameModel');
const { validateTask } = require('./utils/validations');
const errorMessage = require('./utils/errorMessage');

module.exports = async (name, status) => {
  const { error } = validateTask.validate({ name, status });

  if (error) throw errorMessage(400, error.message);

  const existTask = await findTaskByNameModel(name);

  if (existTask) throw errorMessage(409, 'Task already registered');

  const createdTask = await createTaskModel(name, status);

  return createdTask;
};
