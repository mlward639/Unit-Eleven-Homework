# Unit-Eleven-Homework

# Unit-ten-homework

<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>

## Description
Note Taker application back end created from starter code of front end. Used to write and save notes. Deployed to Heroku.

## Table of Contents 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [Contribution Guidelines](#contribution-guidelines)
 - [Test Instructions](#test-instructions)
 - [License](#license)

## Installation
.............Use package.json to download dependencies (using npm install).

## Usage
On opening the Note Taker application, there is link to the notes page on the landing page. Clicking it brings you to note page with existing notes in the left-hand column (?? need local storage? or is this with the write file stuff) and empty fields in the right-hand column to enter new notes. Can enter title and text for each new note, then a Save icon appears (navigation at top page) and on clicking it, the new note is saved and shows up in left-hand column. If you click on this note in the left, it will then appear again in the right column. There is a Write icon in navigation at page top and on clicking this, you can enter a new note title and test in an empty field on the right column.

-------------------DELETE-------------------
## Getting Started


The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).
## Bonus

You haven’t learned how to handle DELETE requests, but this application has that functionality in the front end. As a bonus, see if you can add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


back end is Express.js

must store notes with unique IDs in JSON file

deploy to Heroku
--------------------------------------------

## Credits
/* Jest to run unit tests.
Inquirer to collect input from the user.
Util for asynchronous function.
fs to access file system.
Bootstrap for CSS framework for cards.
Font awesome for icons. */

Uses Express.js backend
 This application will use an Express.js back end and will save and retrieve note data from a JSON file.
## Contribution Guidelines
Utilize The Contributor Covenant (https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md) as reference for appropriate contribution guidelines.

## Test Instructions
n/a?

## License
License type: MIT

    "Copyright 2021 <COPYRIGHT HOLDER>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."

Source for licensing information: <a href="https://opensource.org/licenses/MIT">Link to MIT license information</a>

## Screenshots

Screenshot of :
<img src='' alt = ''>

Screenshot of :
<img src='' alt = ''>


Screenshot of :
<img src='' alt = ''>


## URLs
<a href="https://github.com/mlward639/Unit-Eleven-Homework">Link to GitHub Repository</a>

<a href="#">Link to Deployed Application</a>
