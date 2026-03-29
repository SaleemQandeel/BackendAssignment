const { readMovies } = require('../utils/fileHandler');

// GET /movies
const getMovies = async(req, res) => {
    try {
        const movies = await readMovies();
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(movies));
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Server error' }));
    }
};

// GET /movies/:id
const getMovieById = async(req, res, id) => {
    try {
        const movies = await readMovies();

        // 🔥 تأكدنا من النوع
        const movie = movies.find(m => Number(m.id) === id);

        if (!movie) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ error: 'Movie not found' }));
        }

        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(movie));

    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Server error' }));
    }
};

module.exports = {
    getMovies,
    getMovieById
};