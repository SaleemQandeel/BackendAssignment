const url = require('url');
const {
    getMovies,
    getMovieById
} = require('../controllers/moviesController');

const moviesRoute = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;
    const idMatch = path.match(/^\/movies\/(\d+)/);
    const id = idMatch ? parseInt(idMatch[1]) : null;

    switch (true) {

        // GET /movies/:id
        case method === 'GET' && id !== null:
            return getMovieById(req, res, id);

            // GET /movies
        case method === 'GET' && path === '/movies':
            return getMovies(req, res);

        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Route not found' }));
    }
};

module.exports = moviesRoute;