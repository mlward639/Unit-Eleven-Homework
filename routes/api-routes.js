// API routes

// Get dependencies
const path = require("path");
const {v4 : uuidv4} = require('uuid');
const fs = require('fs');
const express = require('express');
const app = express();

//app.use(express.static('db'));

module.exports = function(app){
    // access saved notes from db.json file
    let savedNotes = JSON.parse(fs.readFileSync('db/db.json'));

    // set up api/notes get route
    app.get('/api/notes', (req, res) => {
        console.log(savedNotes);
        res.json(savedNotes)        
    });

    // set up api/notes post route
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4(); 
        console.log('new note', newNote);
        //access db.json array, push new note to that, then write new updated array back to db.json
        savedNotes.push(newNote);
        fs.writeFileSync('db/db.json', JSON.stringify(savedNotes));
        res.json(newNote);
    });
    
    // set up api/notes delete route based on specific id
    app.delete('/api/notes/:id', (req, res) => {
        let savedNotes = JSON.parse(fs.readFileSync('db/db.json'));
        const id = req.params.id;
        for (let i=0; i<savedNotes.length; i++) {
            if (id === savedNotes[i].id) {
                savedNotes.splice(i, 1);
                fs.writeFileSync('db/db.json', JSON.stringify(savedNotes));
                };
            };
        res.json(savedNotes); //why do i have to click refresh here
        });
}

