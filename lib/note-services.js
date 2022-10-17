const fs = require("fs");
const path = require("path");


//function to create note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    fs.writeFileSync(
        path.join(__dirname, "../db/notes.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

//function to update note
function updateNote() {

};

//function to delete note
function deleteNote() {

};

//function to get note
function getNotes() {
    

};

//function to getNoteByID
function getNoteByID(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;

};

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
};

module.exports = {
    createNewNote,
    updateNote,
    deleteNote,
    getNotes,
    getNoteByID,
    validateNote
};