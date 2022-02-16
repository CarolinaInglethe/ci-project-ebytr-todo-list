const deleteTaskModel = require('../models/deleteTaskModel');

module.exports = async (id) => {
  const deletedTask = await deleteTaskModel(id);

  return deletedTask;
};
