// API routes
const path = require("path");
const {v4 : uuidv4} = require('uuid');
const notes = require('../db/db.json');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('db'));

module.exports = function(app){
    app.get('/api/notes', (req, res) => res.json(notes));

    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4(); 
        console.log('new note', newNote);
        //access db.json array, push new note to that, then write new updated array back to db.json
        let savedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
        console.log("Anything");
        savedNotes.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(savedNotes));
        res.json(newNote);
    });
}
/* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you). */