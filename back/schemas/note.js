const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: String,
    content: { type: String, required: true },
    date: String,
});

const noteModel = mongoose.model("Note", noteSchema);

module.exports = noteModel;
