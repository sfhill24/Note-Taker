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


//function to delete note
function deleteNote(note, notesArray) {
    const index = notesArray.indexOf(note);
    notesArray.splice(index, 1);

    fs.writeFileSync(
        path.join(__dirname, "../db/db.son"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return notesArray;

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
    deleteNote,
    getNoteByID,
    validateNote
};