const express = require('express');
const bodyParser = require('body-parser');
const pagination = require('./controllers/pagination');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

app.post('/pagination', pagination.createArrayWithNumberOfPagination);

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));

module.exports = app;
