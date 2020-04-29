const mongoose = require('mongoose');
const helpers = require('../helpers');

const { message } = helpers;
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    courses: {
        type: [{ type: Schema.Types.ObjectId, ref: 'course' }],
        validate: [v => v.length, message]
    }
});

module.exports = mongoose.model('order', orderSchema);