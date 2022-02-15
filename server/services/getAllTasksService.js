const getAllTasksModel = require('../models/getAllTasksModel');

module.exports = async () => {
  const getAllTasks = await getAllTasksModel();
  return getAllTasks;
};
