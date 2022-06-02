const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    usernae: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    posts: {
        type: String,
    },
    Comment: {
        type: String,
    },
    admin: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userschema);