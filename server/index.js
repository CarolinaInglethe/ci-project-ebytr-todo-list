const express = require('express');

const app = express();

const routeTasksList = require('./routes/tasksList');
const error = require('./middlewares/error');

require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/tasks', routeTasksList);

app.use(error);

app.listen(PORT, () => console.log(`Online na porta ${PORT}`));
