const mongoose = require('mongoose');
const constants = require('../constants');

const { message } = constants;
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    courses: {
        type: [{ type: Schema.Types.ObjectId, ref: 'course' }],
        validate: [v => v.length, message]
    }
});

module.exports = mongoose.model('order', orderSchema);