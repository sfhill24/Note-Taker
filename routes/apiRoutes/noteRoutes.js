const router = require("express").Router();
const { notes } = require("../../db/notes");
const { createNewNote, validateNote, getNoteByID, } = require("../../lib/note-services");

router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send("The note added is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

router.get("/notes/:id", (req, res) => {
    const result = getNoteByID(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

router.get("/notes", (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
});





module.exports = router;