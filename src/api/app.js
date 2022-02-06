const express = require('express');
const bodyParser = require('body-parser');
const pagination = require('./controllers/pagination');

const app = express();
app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/pagination', pagination.createArrayWithNumberOfPagination);

module.exports = app;