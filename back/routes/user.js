const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userModel = require("../schemas/user");
const mongoose = require("mongoose");

const router = express.Router();

let mongoDB;
const mongoURI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

(async () => {
    mongoDB = await mongoose.connect(mongoURI);
})();

// Testing hash for qwerty123
const qwertyHash =
    "$2b$10$gFGKHfvnwaXkkk0rnHT8ve4ng4xfFvK2eLZmKg/C54iP7wld6iaay";

// Register
router.post("/register", async (req, res) => {
    const { username } = req.body;
    const user = await userModel.findOne({ username: username });

    if (user !== null) {
        res.status(400).send({ msg: "User already exists" });
        return;
    }

    // TODO - Password validation?

    const password = await bcrypt.hash(req.body.password, 10);
    const newUser = new userModel({
        username,
        password,
    });

    // Save to database
    try {
        await newUser.save();
        res.status(201).send({ msg: "User Created" });
    } catch (e) {
        res.status(400).send({ msg: e.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await userModel.findOne({ username: username });
    if (user === null) {
        res.status(403).send({ msg: "User does not exist " });
        return;
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
        res.status(403).send({ msg: "Wrong Password" });
        return;
    }

    const token = jwt.sign({ username }, JWT_SECRET);

    res.status(200).send({ token });
});

module.exports = { userRouter: router };
