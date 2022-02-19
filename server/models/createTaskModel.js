const connection = require('./connection');

module.exports = async (name, status) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  await collectionTasksList.insertOne({
    name, status, creationDate: new Date(),
  });
  return { message: 'task created successfully' };
};
