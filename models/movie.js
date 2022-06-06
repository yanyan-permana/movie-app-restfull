// Import mongoose module
const mongoose = require("mongoose");

// Buat schema
const movie = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

// Export modul
module.exports = mongoose.model('movies', movie);