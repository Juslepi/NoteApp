const express = require("express");
const { authMiddleWare } = require("./middleware/authorization");
require("dotenv").config();
const { noteRouter } = require("./routes/notes");
const { userRouter } = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/note", noteRouter)
app.use("/user", userRouter)

app.use("/secret", authMiddleWare)

const port = process.env.PORT;
app.listen(port, () => console.log("Listening to ", port));
