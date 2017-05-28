const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.status(404).send({
    error: 'Page Not Found!',
    name: 'My App'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Jim',
      age: 22
    },
    {
      name: 'Jeremy',
      age: 23
    }
  ]);
});

app.listen(3333, () => {
  console.log('app running on 3333');
});

module.exports.app = app;
