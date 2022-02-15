const getAllTasksModel = require('../models/getAllTasksModel');

module.exports = async () => {
  const getAllTasks = await getAllTasksModel();

  if (!getAllTasks) return null;

  return getAllTasks;
};
