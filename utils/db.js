//Import mongoose module
const mongoose = require('mongoose');

//Set up koneksi
var mongoDB = 'mongodb://127.0.0.1/movie_app_restfull';
mongoose.connect(mongoDB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

// Get koneksi
var db = mongoose.connection;

// Cek jika db error
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Database Connected'));