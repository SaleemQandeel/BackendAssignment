const fs = require('fs').promises;
const FILE = './movies-db.json';
const readMovies = async() => {
    const data = await fs.readFile(FILE, 'utf-8');
    return JSON.parse(data || '[]');
};
module.exports = {
    readMovies
};