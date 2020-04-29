const mongoose = require('mongoose');
const helpers = require('../helpers');

const { required, stringData } = helpers;

const courseSchema = new mongoose.Schema({
    title: stringData,
    description: stringData,
    teacher: stringData,
    image: stringData,
    price: { type: Number, required }
});

module.exports = mongoose.model('course', courseSchema);