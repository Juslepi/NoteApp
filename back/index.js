const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const noteModel = require("./schemas/note");
const date = require("date-and-time");

const app = express();
app.use(express.json());

let mongoDB;
const mongoURI = process.env.MONGO_URI;

(async () => {
    mongoDB = await mongoose.connect(mongoURI);
})();

app.post("/", async (req, res) => {
    const { name, content } = req.body;
    const dateNow = date.format(new Date(), "DD-MM-YYYY")

    const note = new noteModel({
        name,
        content,
        date: dateNow,
    });

    await note.save()

    res.send(note)
});

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to ", port));
