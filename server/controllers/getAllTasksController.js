const getAllTasksService = require('../services/getAllTasksService');

module.exports = async (_req, res) => {
  try {
    const allTasks = await getAllTasksService();

    if (!allTasks) return res.status(401).json({ message: 'Not found tasks' });

    return res.status(200).json(allTasks);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ menssage: 'Internal server error' });
  }
};
