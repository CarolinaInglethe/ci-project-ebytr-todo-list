const connection = require('./connection');

module.exports = async () => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const getAllTasks = await collectionTasksList.find({}).toArray();
  return getAllTasks;
};
