require('./config');
require('./database');

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
app.use(express.static('public'));
app.use(require('./routes'));
app.listen(process.env.PORT, () => console.log('Port:', process.env.PORT));