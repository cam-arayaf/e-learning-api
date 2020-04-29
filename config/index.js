process.env.PORT = process.env.PORT || 3001;
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.URL_DB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27017/e-learning' : process.env.MONGO_URI;