// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const {v4 : uuidv4} = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const notes = [{routeName, noteTitle, noteDetails}];

// Routes 
// move to other file once working (i think either export and require them in here or something like: 
    //app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));

//basic routes to send user to AJAX page first
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(notes));
* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

//routes to create new notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const newId = uuidv4(); //not sure about this yet
    newNote.routeName = newNote.noteTitle.replace(/\s+/g, '').toLowerCase();
    console.log('new note', newNote);
    notes.push(newNote);
    res.json(newNote);
});
* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).

// start server listening
app.listen(PORT, () => console.log('App listening on PORT', PORT));