const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true
    },
    username: {
        type: String,
        unique: true
    },
    name:{
        type:String,
        required:true
    },
    admin: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: Array,
    },
    // Comment: {
    //     type: String,
    // }
});

module.exports = mongoose.model('user', userschema);