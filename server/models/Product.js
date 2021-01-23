const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('product', ProductSchema);