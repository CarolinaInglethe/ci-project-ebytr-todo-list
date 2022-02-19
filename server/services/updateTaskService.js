const updateTaskModel = require('../models/updateTaskModel');
const { validateTask } = require('./utils/validations');
const errorMessage = require('./utils/errorMessage');

module.exports = async (id, name, status) => {
  const { error } = validateTask.validate({ name, status });

  if (error) throw errorMessage(400, error.message);

  const updateTask = await updateTaskModel(id, name, status);

  return updateTask;
};
