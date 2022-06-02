const mongoose = require("mongoose");

let postschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: String,
    date: {
        type: Date
    },
    upvote: {
        type: Number,
        default: 0
    },
    downvote: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Post', postschema);