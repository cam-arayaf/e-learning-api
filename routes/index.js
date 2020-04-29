const express = require('express');

const app = express();

app.use(require('./courses'));
app.use(require('./orders'));

module.exports = app;