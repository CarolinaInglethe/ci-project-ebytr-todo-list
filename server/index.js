const app = require('express')();
// const bodyParser = require('body-parser');

// app.use(bodyParser);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Sucesso' });
});

app.listen(3001, () => console.log('Online 3001'));
