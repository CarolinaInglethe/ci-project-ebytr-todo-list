const connection = require('./connection');

module.exports = async (nameParam, name, status) => {
  const collectionTasksList = await connection()
    .then((db) => db.collection('tasksList'));

  const updateTask = await collectionTasksList.updateOne(
    { name, status },
    { where: nameParam },
  );
  return updateTask;
};
