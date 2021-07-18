const path = require("path");

// HTML routes
module.exports = function(app){
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
}