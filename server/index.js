const app = require('express')();
const routeTasksList = require('./routes/tasksList');
const error = require('./middlewares/error');
// const bodyParser = require('body-parser');

// app.use(bodyParser);

app.use('/tasks', routeTasksList);

app.use(error);

app.listen(3001, () => console.log('Online 3001'));
