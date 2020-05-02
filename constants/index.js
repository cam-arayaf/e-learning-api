const port = 3001;
const dev = 'DEV';
const local_uri = 'mongodb://localhost:27017/e-learning'
const useNewUrlParser = true;
const useFindAndModify = false;
const useCreateIndex = true;
const useUnifiedTopology = true;
const options = { useNewUrlParser, useFindAndModify, useCreateIndex, useUnifiedTopology };
const message = '{PATH} is required';
const required = [true, message];
const stringData = { type: String, required };

module.exports = { port, dev, local_uri, options, message, required, stringData };