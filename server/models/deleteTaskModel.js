const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const deletedTask = await collectionTasksList.deleteOne(
    { _id: ObjectId(id) },
  );
  return deletedTask;
};
