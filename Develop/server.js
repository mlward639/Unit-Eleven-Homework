// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const {v4 : uuidv4} = require('uuid');

const app = express();

// Set PORT
const PORT = process.env.PORT || 3000;

// Data parsing with express
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes 
require('./routes/html-routes')(app);
require('./routes/api-routes')(app);


const notes = require('./db/db.json');

// start server listening
app.listen(PORT, () => console.log('App listening on PORT', PORT));