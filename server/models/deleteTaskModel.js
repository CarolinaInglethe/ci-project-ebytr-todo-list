const { ObjectId } = require('mongodb');
const connection = require('./connection');

module.exports = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  await collectionTasksList.deleteOne(
    { _id: ObjectId(id) },
  );
  return { message: 'task deleted successfully' };
};
