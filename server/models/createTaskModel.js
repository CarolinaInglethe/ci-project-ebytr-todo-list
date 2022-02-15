const connection = require('./connection');

module.exports = async (name, status) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const createdTask = await collectionTasksList.insertOne({
    name, status, creationDate: new Date(),
  });
  return createdTask;
};
