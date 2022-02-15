const app = require('express')();
const routeTasksList = require('./routes/tasksList');
// const bodyParser = require('body-parser');

// app.use(bodyParser);

app.use('/tasks', routeTasksList);

app.listen(3001, () => console.log('Online 3001'));
