const http = require('http');
const moviesRoute = require('./routes/movies');

const PORT = 5050;

const server = http.createServer((req, res) => {
    moviesRoute(req, res);
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});