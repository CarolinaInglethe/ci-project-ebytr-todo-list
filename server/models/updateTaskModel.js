const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id, name, status) => {
  if (!ObjectId.isValid(id)) return null;

  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  await collectionTasksList.updateOne(
    { _id: ObjectId(id) },
    { $set: { name, status, creationDate: new Date() } },
  );
  return { message: 'task updated successfully' };
};
