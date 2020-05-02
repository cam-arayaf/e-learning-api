const constants = require('../constants');

const { port, dev, local_uri } = constants;

process.env.PORT = process.env.PORT || port;
process.env.NODE_ENV = process.env.NODE_ENV || dev;
process.env.URL_DB = process.env.NODE_ENV === dev ? local_uri : process.env.MONGO_URI;