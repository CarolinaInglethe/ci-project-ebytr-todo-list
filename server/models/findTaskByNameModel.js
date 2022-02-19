const connection = require('./connection');

module.exports = async (name) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const findTask = await collectionTasksList.findOne({ name });
  return findTask;
};
