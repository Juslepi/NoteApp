const jwt = require("jsonwebtoken");
const router = require("express").Router();
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (token === null || token === undefined) {
        res.status(403).send({ msg: "No token found" });
    }

    try {
        const tokenVerified = await jwt.verify(token, JWT_SECRET);
        res.locals.username = tokenVerified.username;
    } catch (e) {
        res.send({ msg: "Invalid Token" });
        return;
    }
    
    next();
};

module.exports = { authMiddleWare: router };
