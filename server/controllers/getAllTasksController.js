const getAllTasksService = require('../services/getAllTasksService');

module.exports = async (_req, res) => {
  try {
    const allTasks = await getAllTasksService();
    return res.status(200).json(allTasks);
  } catch (err) {
    return res.status(500).json({ menssage: 'Internal server error' });
  }
};
