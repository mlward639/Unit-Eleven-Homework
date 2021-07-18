// Set up path
const path = require("path");

// HTML routes
module.exports = function(app){
    // Display the notes.html page when '/notes' accessed
    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));
    // Otherwise, display index.html
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
}