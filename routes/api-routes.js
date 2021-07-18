// API routes
const path = require("path");
const {v4 : uuidv4} = require('uuid');
const notes = require('../db/db.json');
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('db'));

module.exports = function(app){
    // set up api/notes get route
    app.get('/api/notes', (req, res) => res.json(notes));

    // set up api/notes post route
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4(); 
        console.log('new note', newNote);
        //access db.json array, push new note to that, then write new updated array back to db.json
        let savedNotes = JSON.parse(fs.readFileSync('db/db.json'));
        //console.log("Anything");
        //console.log('before', savedNotes);
        savedNotes.push(newNote);
        //console.log('after', savedNotes);
        fs.writeFileSync('db/db.json', JSON.stringify(savedNotes));
        res.json(newNote);
    });
    // set up api/notes delete route based on specific id
    app.delete('/api/notes/:id', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync('db/db.json'));
        const { id } = req.params.id;
        savedNotes.splice(id, 1);
        fs.writeFileSync('db/db.json', JSON.stringify(savedNotes));
        });
    }
/*
Maybe separate the fs.readFileSync and fs.writeFileSync into their own async functions
2:20
Then use await when you call those functions
2:21
Because, I feel like heroku is having a sync problem */
/* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you). */