// Import express module
const express = require('express');
// Import cors module
const cors = require('cors');
// Import utils db
require('./utils/db');
// Import routes
const movieRoute = require('./routes/movie');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/movie', movieRoute);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});