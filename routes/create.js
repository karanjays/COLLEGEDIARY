const express = require ("express");
const router = express.Router();
const postcontroller = require("../controllers/postcontroller");


router.get("/create-post",(req,res)=>{
    res.render("post");
});

router.post("/create-post",postcontroller.createNewPost);

module.exports=router;