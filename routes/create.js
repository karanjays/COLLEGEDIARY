const express = require ("express");
const router = express.Router();
const postcontroller = require("../controllers/postcontroller");
const Post=require("../model/post");


router.get("/create-post",postcontroller.createNewPost);

router.post("/create-post",async (req,res)=>
{
    console.log(req.body.title,req.body.content);
    
    let postData = new Post({
        title:req.body.title,
        content:req.body.content,
        type:"notices",
        author:"Karan",
        date: new Date(),
        upvote: 3
    });

    // callback
    // postData.save((err,post)=>
    // {
    // if(err)
    //     console.log(err);
    // else
    //     console.log(post);
    // }
    // );

    //promices
    // postData.save()
    // .then(post=>{
    //     console.log(post);
    // })
    // .catch(err=>{
    //     console.log(err);
    // });


    // async and await
    try
    {
    await postData.save();
    console.log(postData);
    const blogs = await Post.find({});
    console.log(blogs);
    res.render("home");
    }catch(err)
    {
        console.log(err);
    }
});

module.exports=router;