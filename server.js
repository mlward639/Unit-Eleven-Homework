// Dependencies
const express = require('express');
const path = require('path');


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

//routes to create new notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.routeName = newNote.noteTitle.replace(/\s+/g, '').toLowerCase();
    console.log('new note', newNote);
    notes.push(newNote);
    res.json(newNote);
});

// start server listening
app.listen(PORT, () => console.log('App listening on PORT', PORT));