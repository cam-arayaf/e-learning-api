const mongoose = require('mongoose');
const constants = require('../constants');

const { required, stringData } = constants;

const courseSchema = new mongoose.Schema({
    title: stringData,
    description: stringData,
    teacher: stringData,
    image: stringData,
    price: { type: Number, required }
});

module.exports = mongoose.model('course', courseSchema);