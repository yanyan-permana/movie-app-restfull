// Import express module
const express = require("express");
const { 
        movieGetAll, 
        movieGetByid, 
        movieSave, 
        movieUpdate, 
        movieDelete 
    } = require("../controller/movieController");

// Jalankan express router
const movieRouter = express.Router();

// Route get all movie
movieRouter.get('/', movieGetAll);
// Route get movie by id
movieRouter.get('/:id', movieGetByid);
// Route save movie
movieRouter.post('/', movieSave);
// Route update movie
movieRouter.put('/:id', movieUpdate);
// Rpute delete movie
movieRouter.delete('/:id', movieDelete);


module.exports = movieRouter;