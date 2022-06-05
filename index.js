const express = require("express");
const app=express();
const path=require("path");
const bodyParser = require("body-parser");
const session=require("express-session");
const MongoDBStore=require("connect-mongodb-session")(session);
//route
const postrouts = require("./routes/post");
const createrouts = require("./routes/create");
const registerrouts = require("./routes/register");
const { default: mongoose } = require("mongoose");
const Mongo_URI="mongodb://localhost:27017/collegediary";
const store=new MongoDBStore({uri:Mongo_URI,collection:'sessions'});

//inluded path
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,"public")));
app.set('view engine','ejs');
app.use(session({secret:"my secret",resave:false,saveUninitialized:false,store:store}));


//route
app.use(registerrouts);
app.use(createrouts);
app.use(postrouts);


//home
app.get("/",(req,res)=>
{
    const isLoggedIn=req.session.isLoggedIn;
    console.log(isLoggedIn);
    res.render('home',{isLoggedIn});
    // res.render('home');
});


//listening
app.listen(3000,()=>
{
    console.log("connected..");
});


//db connection
mongoose.connect(Mongo_URI,()=>
{
    console.log("connected to db");
})