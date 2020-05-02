const mongoose = require('mongoose');
const constants = require('../constants');

const { URL_DB } = process.env;
const { options } = constants;

mongoose.connect(URL_DB, options, err => {
    if (err) throw err;
    console.log('DB status: Online');
});