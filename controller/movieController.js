// Import model
const movieModel = require("../models/movie");

// Get all movies
const movieGetAll = async (req, res) => {
    try {
        const movies = await movieModel.find();
        res.json({
            movies: movies,
            status: true,
            total: movies.length
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Get movie by id
const movieGetByid = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        res.json({
            movie,
            status: true
        });
    } catch (error) {
        res.status(404).json({
            // message: error.message,
            message: "Data not found",
            status: false
        });
    }
}

// Save movie
const movieSave = async (req, res) => {
    // const movieMdl = new movieModel(req.body);
    try {
        // const movie = await movieMdl.save();
        const movie = await movieModel.create({
            title: req.body.title,
            year: req.body.year,
            type: req.body.type
        })
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: false            
        });
    }
}

// Update movie
const movieUpdate = async (req, res) => {
    try {
        const opts = { runValidators: true };
        const movie = await movieModel.findByIdAndUpdate(req.params.id, 
            {
                $set: {
                    title: req.body.title,
                    year: req.body.year,
                    type: req.body.type
                }
            },
            opts
        );
        res.json(movie);
    } catch (error) {
        res.status(400).json({
            message: error.message,
            status: false
        });
    }
}

// Delete movie
const movieDelete = async (req, res) => {
    // Validasi id
    const checkId = await movieModel.findById(req.params.id);
    // Cek jika id tidak ada
    if (!checkId) return res.status(404).json({message:"Data tidak ditemukan"});

    try {
        const movie = await movieModel.deleteOne({_id: req.params.id});
        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    movieGetAll,
    movieGetByid,
    movieSave,
    movieUpdate,
    movieDelete
}
