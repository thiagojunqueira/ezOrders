const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    table: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        enum: ['PENDING', 'PREPARING', 'DONE'],
        default: 'PENDING'
    }
});

module.exports = mongoose.model('Order', OrderSchema)