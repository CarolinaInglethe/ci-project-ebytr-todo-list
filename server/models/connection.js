const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST} || 'mongodb'}:27017/ebytrTodoList`;

const DB_NAME = 'ebytrTodoList';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => conn.db(DB_NAME))
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};
