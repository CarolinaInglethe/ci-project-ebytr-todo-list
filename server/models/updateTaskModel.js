const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, name, status) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const updateTask = await collectionTasksList.updateOne(
    { _id: ObjectId(id) },
    { $set: { name, status } },
  );
  return updateTask;
};
