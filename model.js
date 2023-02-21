const mongoose = require('mongoose');

const Employee = mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    gender: { type: String, required: true },
});

module.exports = mongoose.model('Employee', Employee);