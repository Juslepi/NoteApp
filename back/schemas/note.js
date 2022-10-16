const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: String,
    content: String,
    date: String,
});

const noteModel = mongoose.model("Note", noteSchema);

module.exports = noteModel
