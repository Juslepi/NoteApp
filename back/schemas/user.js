const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required },
    password: { type: String, required },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
