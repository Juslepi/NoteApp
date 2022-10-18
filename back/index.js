const express = require("express");
require("dotenv").config();
const { noteRouter } = require("./routes/notes");
const { userRouter } = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/note", noteRouter)
app.use("/user", userRouter)

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to ", port));