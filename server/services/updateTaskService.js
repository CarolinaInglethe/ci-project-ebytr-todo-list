const updateTaskModel = require('../models/updateTaskModel');
const { validateTask } = require('./utils/validations');
const errorMessage = require('./utils/errorMessage');

module.exports = async (nameParams, name, status) => {
  const { error } = validateTask.validate({ name, status });

  if (error) throw errorMessage(400, error.message);

  const updateTask = await updateTaskModel(nameParams, name, status);

  return updateTask;
};
