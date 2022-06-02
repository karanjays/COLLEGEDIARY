const express = require("express");
const app=express();
const path=require("path");
const bodyParser = require("body-parser");

//route
const postrouts = require("./routes/post");
const createrouts = require("./routes/create");
const registerrouts = require("./routes/register");
const { default: mongoose } = require("mongoose");

//inluded path
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');

//route
app.use(registerrouts);
app.use(createrouts);
app.use(postrouts);


//home
app.get("/",(req,res)=>
{
    res.render('home');
});


//listening
app.listen(3000,()=>
{
    console.log("connected..");
});


//db connection
mongoose.connect("mongodb://localhost:27017/collegediary",()=>
{
    console.log("connected to db");
})