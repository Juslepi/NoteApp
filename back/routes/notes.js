const express = require("express");
const mongoose = require("mongoose");
const noteModel = require("../schemas/note");
const date = require("date-and-time");

const router = express.Router();

let mongoDB;
const mongoURI = process.env.MONGO_URI;

(async () => {
    mongoDB = await mongoose.connect(mongoURI);
})();

// Get all notes
router.get("/", async (req, res) => {
    try {
        const allNotes = await noteModel.find({});
        res.send(allNotes);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// Post note
router.post("/", async (req, res) => {
    const { name, content } = req.body;
    const dateNow = date.format(new Date(), "DD-MM-YYYY");

    try {
        const note = new noteModel({
            name,
            content,
            date: dateNow,
        });

        await note.save();
        res.status(201).send(note);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

// Update note
router.put("/", async (req, res) => {
    const { id, name, content } = req.body.data;

    console.log(name);

    try {
        const updatedNote = await noteModel.findOneAndUpdate(
            { _id: id },
            { name, content },
            { new: true }
        );
        res.status(201).send(updatedNote);
    } catch (e) {
        res.status(400).send(e.message);
    }
});
// Delete note
router.delete("/", async (req, res) => {
    const { id } = req.body;
    
    try {
        const note = await noteModel.findOneAndDelete({ _id: id });

        if (note !== null && note !== undefined) {
            res.status(201).send(`Deleted note ${id}`);
        } else {
            throw new mongoose.Error.DocumentNotFoundError(id);
        }
        
    } catch (e) {
        res.status(400).send(e.message)
    }
});

module.exports = { noteRouter: router };
