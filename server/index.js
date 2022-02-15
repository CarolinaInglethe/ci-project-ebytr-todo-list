const app = require('express')();
const bodyParser = require('body-parser');
const routeTasksList = require('./routes/tasksList');
const error = require('./middlewares/error');

require('dotenv').config();

const { PORT } = process.env.PORT || 3001;

app.use(bodyParser);

app.use('/tasks', routeTasksList);

app.use(error);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
