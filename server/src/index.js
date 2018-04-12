require('dotenv').config();
require('./models').connect();

const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const path = require('path');
const { NOT_FOUND } = require('http-status-codes');

const { sendNotFound } = require('./utils/httpError');

const calRoute = require('./calculator');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');

// App
const app = express();

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

app.use(expressValidator());

app.use(bodyParser.json())

app.use('/api', [
  calRoute,
]);

const notFoundError = (req, res) => res.send(NOT_FOUND, sendNotFound());

// Index request return the React app, so it can handle routing.
app.get('/', function(request, response) {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.all('*', notFoundError);


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app; // for testing
